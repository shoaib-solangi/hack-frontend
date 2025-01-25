"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { app } from "@/firebase/firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState, ChangeEvent } from "react";

function Form() {
    const [authorName, setAuthorName] = useState<string>('');
    const [authorEmail, setAuthorEmail] = useState<string>('');
    const [blogTitle, setBlogTitle] = useState<string>('');
    const [blogDescription, setBlogDescription] = useState<string>('');
    const [blogCateg, setBlogCateg] = useState<string>('');
    const [blogImage, setBlogImage] = useState<File | null>(null);

    const db = getFirestore(app);
    const storage = getStorage(app);

    const handlePostSubmit = async () => {
        try {
            let imageUrl = "";
            if (blogImage) {
                const imageRef = ref(storage, `blogImg/${blogTitle}`);
                await uploadBytes(imageRef, blogImage);
                imageUrl = await getDownloadURL(imageRef);
            }

            // Save the blog data to Firestore
            await addDoc(collection(db, "Blogs"), {
                authorName,
                authorEmail,
                blogTitle,
                blogDescription,
                blogCateg,
                imageUrl,
                timestamp: new Date(),
            });

            console.log("Blog post added successfully!");

        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setBlogImage(e.target.files[0]);
        }
    };

    return (
        <div className="flex justify-center min-h-screen bg-blueGray-800">
            <div className="bg-blueGray-900 p-6 rounded-lg shadow-md w-full max-w-lg">
                <label className="block mb-4">
                    <span className="text-white font-semibold">Author Name</span>
                    <Input
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="mt-2 w-[600px] max-w-full p-2 border border-blueGray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Enter Author Name"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-white font-semibold">Author Email</span>
                    <Input
                        onChange={(e) => setAuthorEmail(e.target.value)}
                        type="email"
                        className="mt-2 w-[600px] max-w-full p-2 border border-blueGray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Enter Auth Email"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-white font-semibold">Blog Title</span>
                    <Input
                        onChange={(e) => setBlogTitle(e.target.value)}
                        className="mt-2 w-[600px] max-w-full p-2 border border-blueGray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Enter blog title"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-white font-semibold">Blog Description</span>
                    <Input
                        onChange={(e) => setBlogDescription(e.target.value)}
                        placeholder="Enter blog Description"
                        className="mt-2 w-[600px] max-w-full p-2 border border-blueGray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    />
                </label>
                <label className="block mb-4 mt-2">
                    <span className="text-white font-semibold">Blog Categ</span>
                    <Select onValueChange={(value) => setBlogCateg(value)}>
                        <SelectTrigger
                            className="mt-2 w-[600px] max-w-full p-2 border border-blueGray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        >
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                <SelectItem value="Technology">Technology</SelectItem>
                                <SelectItem value="Health & Wellness">Health & Wellness</SelectItem>
                                <SelectItem value="Travel">Travel</SelectItem>
                                <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                <SelectItem value="Sports">Sports</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </label>
                <label className="block mb-4">
                    <span className="text-white font-semibold">Blog Image</span>
                    <Input
                        onChange={handleFile}
                        type="file"
                        className="mt-2 w-[600px] max-w-full p-2 text-white border border-blueGray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blog Image"
                    />
                </label>
                <Button className="bg-white text-black hover:text-white" onClick={handlePostSubmit}>Publish Blog</Button>
            </div>
        </div>
    );
}

export default Form;

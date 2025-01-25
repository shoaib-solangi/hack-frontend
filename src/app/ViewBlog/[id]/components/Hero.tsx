"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/firebase/firebaseConfig";
import { User } from "lucide-react";

function Hero() {
  interface BlogData {
    id: string | null;
    email: string  | null;
    name: string  | null;
    blogTitle: string  | null;
    blogDes: string  | null;
    blogUrl: string  | null;
    time: string  | null;
  }

  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id ? decodeURIComponent(params.id) : null;
  const db = getFirestore(app);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const BlogDoc = doc(db, "Blogs", id);
        const BlogSnapshot = await getDoc(BlogDoc);

        if (BlogSnapshot.exists()) {
          const data = BlogSnapshot.data();
          const formattedTime = data.timestamp.toDate().toLocaleDateString();
          const fetchedBlogData: BlogData = {
            id: BlogSnapshot.id,
            email: data.authorEmail,
            name: data.authorName,
            blogTitle: data.blogTitle,
            blogDes: data.blogDescription,
            blogUrl: data.imageUrl,
            time: formattedTime,
          };
          setBlogData(fetchedBlogData);
        }
      }
    };
    getData();
  }, [id, db]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        {blogData?.blogUrl && (
          <Image
            src={blogData.blogUrl}
            alt="Blog Image"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        )}
      </div>

      <div className="w-full md:w-1/2 text-white space-y-4 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {blogData?.blogTitle}
        </h1>
        <div className="flex items-center space-x-2 text-gray-400">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
            <User className="w-5 h-5" />
          </div>
          <p className="text-sm">
            <span className="font-semibold">{blogData?.name}</span>
            <span className="mx-1">·</span>
            Published {blogData?.time}
          </p>
        </div>
        <p className="text-gray-300 leading-relaxed">{blogData?.blogDes}</p>
      </div>
    </div>
  );
}

export default Hero;

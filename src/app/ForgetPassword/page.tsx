"use client";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const { toast } = useToast();

  const handlePasswordChange = async () => {
    try {
      // Validate if new password matches confirm password
      if (newPassword !== confirmPassword) {
        toast({
          title: "Error",
          description: "New password and confirm password do not match.",
          variant: "destructive",
        });
        return;
      }

      // Prepare the payload
      const data = { currentPassword, newPassword };

      // Make the API call to change the password
      const response = await axios.put("http://localhost:4000/auth/change-password", data, {
        withCredentials: true, // Ensure cookies/token are sent for authentication
      });

      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Password changed successfully.",
        });
        router.push("/login"); // Redirect to login after successful password change
      }
    } catch (error) {
      console.error("Error changing password:", error);

      // Handle errors from the API
      if (error.response?.status === 400) {
        toast({
          title: "Error",
          description: error.response.data.message || "Incorrect current password.",
          variant: "destructive",
        });
      } else if (error.response?.status === 404) {
        toast({
          title: "Error",
          description: "User not found.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Server error. Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Change Your Password
            </h3>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded">
          {/* Current Password */}
          <div>
            <label className="font-medium">Current Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          {/* New Password */}
          <div className="mt-2">
            <label className="font-medium">New Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          {/* Confirm New Password */}
          <div className="mt-2">
            <label className="font-medium">Confirm New Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handlePasswordChange}
            className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Change Password
          </button>
        </div>
      </div>
      <Toaster />
    </main>
  );
}

"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="w-[95%]">
        <h5>Blog</h5>
        <div className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-lg font-semibold">About the Blog</h2>
                <p className="text-sm mt-2 text-gray-400">
                  Discover insightful articles on various topics. We are
                  dedicated to providing quality content for our readers.
                </p>
              </div>

              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-lg font-semibold">Categories</h2>
                <ul className="mt-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Health & Wellness
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Travel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Sports
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold">Contact Us</h2>
                <ul className="mt-2 text-sm text-gray-400">
                  <li>Email: ABC-blog.com</li>
                  <li>Phone: +123 456 7890</li>
                  <li>Address: 123 Karachi ,Pakistan</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mt-4 mb-8">
              <Link href="#" className="hover:text-blue-400">
                <span>Facebook</span>
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-blue-500">
                <span>Twitter</span>
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-red-500">
                <span>Instagram</span>
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-blue-600">
                <span>LinkedIn</span>
                <Linkedin />
              </Link>
            </div>

            <div className="border-t border-gray-700 pt-4 text-center">
              <p className="text-sm text-gray-500">
                &copy; 2024 Your Blog. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

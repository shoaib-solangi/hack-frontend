"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// import useAuth from '../useAuth/useAuth';
// import useUserStore from '@/Zustand/useUserStore';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dataUser, setDataUser] = useState(null);


  const NavItems = [
    { name: "Home", href: "/" },
    { name: "Loan Categories", href: "/LoanCateg" },
    { name: "Calculator", href: "/Calculator" },
    { name: "Apply for Loan", href: "/Apply" },
    { name: "Signup", href: "/Signup" },

    
  ]

  return (
    <>
      <div className="flex justify-center items-center bg-green-600 py-2">
        <div className="w-[100%] max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center p-4">
            <div className="mb-4 md:mb-0 flex justify-between items-center w-full md:w-auto gap-2">
              <Image
                src="/images.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
              <div className="flex flex-col">
                <h2 className="text-white font-bold text-3xl">Saylani</h2>
                <p className="text-gray text-[12px] text-white">Finance App</p>
              </div>

              {/* <div className="md:hidden cursor-pointer text-white" onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </div> */}
            </div>

            <div
              className={`flex flex-col md:flex-row gap-4 items-center ${
                menuOpen ? "block" : "hidden"
              } md:flex`}
            >
              {NavItems.map((item) =>
                <Link href={item.href} key={item.name}>
                  <Button className="text-black bg-blueGray-900 hover:text-green-600 hover:bg-green-50  px-4 py-2">
                    {item.name}
                  </Button>
                </Link>
              )}

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

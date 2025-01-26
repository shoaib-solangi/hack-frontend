"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { LayoutGrid, FileText, ShieldCheck, Clock, Users } from "lucide-react"; // Updated icons
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  const menuList: { id: number; name: string; icon: React.ComponentType; path: string }[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/AdminDashboard/dashboard",
    },
    {
      id: 2,
      name: "Application Management",
      icon: FileText,
      path: "/admin/applications",
    },
    {
      id: 3,
      name: "Loan Details",
      icon: FileText,
      path: "/AdminDashboard/loans",
    },
    {
      id: 4,
      name: "Appointment Scheduling",
      icon: Clock,
      path: "/AdminDashboard/appointments",
    },
    {
      id: 5,
      name: "User Management",
      icon: Users,
      path: "/AdminDashboard/users",
    },
    {
      id: 6,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/AdminDashboard/upgrade",
    },
  ];

  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  return (
    <>
      <div className="h-screen p-5 border shadow-sm">
        <div className="flex gap-4">
        <Image
          src={"/images.png"}
          alt="photo"
          height={50}
          width={50}
          priority={true}
        />
        <div >
          <h2 className="font-bold text-2xl">Saylani</h2>
          <p className="">Finance App</p>
          </div>
          </div>
        <div className="mt-5">
          {menuList.map((menu, index) => {
            return (
              <Link href={menu.path} key={index}>
                <h2
                  className={`${
                    pathName == menu.path && `text-primary bg-blue-100`
                  } flex gap-2 items-center p-5 text-gray-500 hover:text-primary hover:bg-blue-100 font-medium rounded-md`}
                >
                  <menu.icon />
                  <p>{menu.name}</p>
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SideNav;

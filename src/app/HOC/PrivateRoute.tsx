"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../useAuth/useAuth";

type PrivateRouteProps = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/Login");
    }
  }, [user, router]);

  if (!user) {
    return <p>Unauthorized - Please log in to access this page</p>;
  }

  return <>{children}</>;
}

export default PrivateRoute;

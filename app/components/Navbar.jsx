"use client";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>
        <Link href="#about">about</Link>
        {!session ? (
          <Link href="/api/auth/signin">Login</Link>
        ) : (
          <Link href="/api/auth/signout">Logout</Link>
        )}
      </h1>
    </div>
  );
};

export default Navbar;

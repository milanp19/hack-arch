"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }) => {
  return (
    <>
      <SessionProvider basePath={process.env.NEXTAUTH_URL}>
        {children}
      </SessionProvider>
    </>
  );
};

export default AuthProvider;

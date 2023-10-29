"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const router = useRouter();
  const { data } = useSession();
  function handleClick(event) {
    event.preventDefault();
    signIn("google", {
      redirect: true,
      callbackUrl: "/user",
    });
  }
  return (
    <div className="login_container">
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              placeholder="username"
              style={{ borderRadius: "10px" }}
            />
            <input
              type="password"
              placeholder="password"
              style={{ borderRadius: "10px" }}
            />
            <button>login</button>

            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
          <button
            type="button"
            className="login-with-google-btn"
            onClick={handleClick}
          >
            <FcGoogle />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";

import { signOut } from "next-auth/react";
import React from "react";

const page = () => {
  function handleClick(event) {
    event.preventDefault();
    signOut({
      redirect: true,
      callbackUrl: "/",
    });
  }
  return (
    <div className="logout_container">
      <div className="logout-page">
        <div className="form">
          <form className="logout-form">
            <h2>SignOut</h2>
            <p className="">Are you sure about signing out?</p>
            <button onClick={handleClick} style={{ marginTop: "40px" }}>
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import ScreenReader from "../components/ScreenReader";

const page = () => {
  return (
    <div>
      <div className="messageContainer">
        <h1>Question: What is css?</h1>

        <button className="post_button">Post</button>
      </div>
      <ScreenReader />
    </div>
  );
};

export default page;

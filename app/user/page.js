"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ScreenReader from "../components/ScreenReader";
import { useRef, useState } from "react";
import MentorCard from "../components/MentorCard";

const page = () => {
  const [fileList, setFileList] = useState(null);

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    // 👇 Create new FormData object and append files
    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });
  };

  const files = fileList ? [...fileList] : [];
  return (
    <>
      <Navbar />
      <div className="user_container">
        <div className="messageContainer">
          <h1>What's Your Question?</h1>
          <form>
            <textarea
              className="question"
              type="text"
              placeholder="Enter you question"
            ></textarea>
            <div style={{ marginTop: "12px", marginBottom: "12px" }}>
              Upload your files
            </div>
            <input type="file" multiple onChange={handleFileChange} />
          </form>
          {files.map((file, i) => (
            <h1 key={i}>{file.name}</h1>
          ))}
          <button className="post_button">Post</button>
        </div>
        <div className="mentorContainer">
          <h3>Choose your mentor</h3>
          <p
            style={{
              textAlign: "start",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
          >
            Recommended
          </p>
          <div>
            <MentorCard />
          </div>

          <p
            style={{
              textAlign: "start",
              paddingLeft: "20px",
              marginTop: "20px",
            }}
          >
            Choose Your Mentor
          </p>
          <div>
            <MentorCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

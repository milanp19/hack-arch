import Image from "next/image";
import React from "react";

const MentorCard = () => {
  return (
    <div className="image_container">
      <Image
        className="Image"
        src="/trevor.jpg"
        width={30}
        height={30}
        style={{ borderRadius: "9999px" }}
      />
      <div className="image_text_container">
        <h4>Trevor</h4>
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
};

export default MentorCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pb-12 justify-between flex-col md:flex-row md:flex items-center text-softTextColor flex mt-5">
      {/* <div className="info flex flex-1 flex-col gap-3">
        <div className="logo flex items-center gap-3">
          <Image src="/logo.png" width={50} height={50} alt="/logo" />
          <h1 className="text-lg font-medium">My Blog</h1>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nulla nam eos corrupti possimus dolorem ut, quis nostrum cupiditate
          consequuntur.
        </p>
        <div className="icons mb-8 md:mb-0">
          <Image src="/facebook.png" width={18} height={18} alt="facebook" />
          <Image src="/instagram.png" width={18} height={18} alt="instagram" />
          <Image src="/tiktok.png" width={18} height={18} alt="tiktok" />
          <Image src="/youtube.png" width={18} height={18} alt="youtube" />
        </div>
      </div>
      <div className="links flex flex-1 justify-between w-full md:justify-end md:w-auto gap-12 lg:gap-24 font-light text-xs sm:text-base">
        <div className="list flex flex-col gap-3">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="list flex flex-col gap-3">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/blog">Fashion</Link>
          <Link href="/about">Coding</Link>
          <Link href="/about">Travel</Link>
        </div>
        <div className="list flex flex-col gap-3">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/blog">Instagram</Link>
          <Link href="/about">Tiktok</Link>
          <Link href="/contact">Youtube</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";

const Footer = () => {
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
  return (
    <div className="max-w-280 mx-auto w-full">
      <footer className="footer place-content-center lg:place-content-between place-items-center lg:place-items-start sm:footer-horizontal bg-base-200 p-10 text-blue-200">
        <aside className="place-items-center text-center">
          <Image src="/logo.png" alt="Camera" width={80} height={80} />
          <h2 className="text-xl text-primary font-semibold">CameraCrew</h2>
          <p>Providing reliable services since 1992</p>
        </aside>
        <nav>
          <h6 className="footer-title text-primary">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr className="border-blue-200" />
      <p className="text-center py-1.5 text-xs text-primary">
        Copyright © Md Jahirul Islam Tuku {formattedDate}. All right reserved.
      </p>
    </div>
  );
};

export default Footer;

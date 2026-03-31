import Image from "next/image";
import React from "react";
import banner_image from "../../../../public/assets/images/bannar_image.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10 md:py-28">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-70 h-70 md:w-87.5 md:h-87.5 lg:w-105 lg:h-105 bg-cyan-500 rounded-full flex items-center justify-center">
            <Image
              src={banner_image}
              alt="Camera"
              width={370}
              height="auto"
              className="-rotate-28 hover:-rotate-16 transition"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-start">
          <h5 className="mb-5 uppercase text-primary font-sans antialiased">
            SHOP TO GET WHAT YOU LOVE
          </h5>
          <h1 className="text-5xl font-bold text-blue-200 font-sans antialiased">
            Ready To Spoil Every
            <br className="hidden md:block" /> Moment
          </h1>
          <p className="py-6 text-blue-200">
            Camera Crew is a used camera buying and selling site. A buyer can
            buy the camera of his choice at the same time as the seller can sell
            the camera on this site.
          </p>
          <Link
            href="/register"
            className="btn btn-sm btn-primary btn-outline shadow-none text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

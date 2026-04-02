"use client";
import React from "react";
import Image from "next/image";
import lens1 from "../../../../public/assets/images/lens1.png";
import lens2 from "../../../../public/assets/images/lens2.png";
import lens3 from "../../../../public/assets/images/lens3.png";

const Sample = () => {
  return (
    <div className="bg-base-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Card 1 */}
        <div className="relative bg-base-200 p-6 md:p-8 overflow-hidden flex flex-col min-h-100">
          <div className="text-end">
            <span className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase">
              Disc Up to 50%
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mt-4 leading-tight font-sans antialiased">
              New Digital Camera <br className="hidden md:block" />
              With Tilt Lens
            </h2>
          </div>

          <div className="absolute bottom-0 left-0 w-56 h-56 opacity-80">
            <Image
              src={lens1}
              alt="Camera Lens"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-base-200 p-6 md:p-8 overflow-hidden flex flex-col justify-between min-h-100">
          <div className="flex justify-center items-center h-1/2 relative">
            <Image
              src={lens2}
              alt="Professional Camera"
              width={220}
              className="object-contain scale-110"
            />
          </div>

          <div>
            <span className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase">
              Wide Camera
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mt-2 leading-tight font-sans antialiased">
              Photograph Camera <br className="hidden md:block" />
              For Professional
            </h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-base-200 p-6 md:p-8 overflow-hidden flex flex-col min-h-100">
          <div className="text-center">
            <span className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase">
              Remote Lens
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mt-4 leading-tight font-sans antialiased">
              New Lenses With A <br className="hidden md:block" />
              Million Effects
            </h2>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-60">
            <Image
              src={lens3}
              alt="Remote Lens"
              width={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;

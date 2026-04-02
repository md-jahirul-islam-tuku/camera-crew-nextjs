import Image from "next/image";
import React from "react";
import channel24 from "../../../../public/assets/images/channel24.png";
import dbc from "../../../../public/assets/images/dbc.png";
import desh from "../../../../public/assets/images/desh.png";
import jamuna from "../../../../public/assets/images/jamuna.png";
import news24 from "../../../../public/assets/images/news24.png";
import bijoy from "../../../../public/assets/images/bijoy.png";
import rtv from "../../../../public/assets/images/rtv.png";
import tsports from "../../../../public/assets/images/tsports.png";

const Partners = () => {
  const partners = [
    { id: 1, name: "channel24", image: channel24 },
    { id: 2, name: "dbc", image: dbc },
    { id: 3, name: "desh", image: desh },
    { id: 4, name: "jamuna", image: jamuna },
    { id: 5, name: "news24", image: news24 },
    { id: 6, name: "bijoy", image: bijoy },
    { id: 7, name: "rtv", image: rtv },
    { id: 8, name: "tsports", image: tsports },
  ];
  return (
    <div className="place-content-center place-items-center bg-base-200 py-20">
      <h1 className="mb-10 text-2xl text-center font-semibold text-primary">
        Some of Our Valuable Partners
      </h1>
      <div className="grid grid-cols-4 gap-10">
        {partners.map((partner) => (
          <div key={partner.id} className="">
            <Image
              src={partner.image}
              alt={partner.name}
              width="auto"
              height="auto"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

"use client";

import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <ScrollToTop
      color="white"
      smooth={true}
      viewBox="0 0 150 280"
      className="z-100"
      style={{
        background: "linear-gradient(135deg, #c2410c, #fdba74)",
        borderRadius: "50%",
      }}
    />
  );
};

export default ScrollTop;

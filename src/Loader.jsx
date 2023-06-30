import React from "react";
import { motion } from "framer-motion";

function Logo() {
  const fillVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0 },
      pathL
    },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="1042"
      height="1042"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <motion.path
        fill="none"
        d="M230.5 194.5h6c.57 17.662 1.07 35.329 1.5 53 13.059-9.655 25.726-9.321 38 1a32.653 32.653 0 013 13 1924.62 1924.62 0 001.5 62 32.02 32.02 0 019 3.5c-2.123 1.194-4.457 1.86-7 2-8.333.667-16.667.667-25 0-1.884-.216-3.551-.883-5-2a147.687 147.687 0 0010.5-4.5c.667-21.333.667-42.667 0-64-4.68-11.783-12.013-13.783-22-6a20.51 20.51 0 00-3 8c-.667 20-.667 40 0 60a11.333 11.333 0 001.5 3.5l7 1c2.667 1.333 2.667 2.667 0 4a240.38 240.38 0 01-31 0l-3-1c-1.333-.667-1.333-1.333 0-2 2.851-1.289 5.851-1.789 9-1.5 1.059-38.326 1.226-76.66.5-115-.273-1.829-1.107-3.329-2.5-4.5a45.435 45.435 0 01-10-4 70.92 70.92 0 0114-3c2.674-.67 5.007-1.837 7-3.5z"
        opacity="0.961"
        stroke="#fff" // Optional stroke color for the path
        strokeWidth="2" // Optional stroke width for the path
        initial="hidden"
        animate="visible"
        variants={fillVariants}
      />
    </motion.svg>
  );
}

export default Logo;

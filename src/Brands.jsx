import React from "react";
import { motion } from "framer-motion";

const brands = [
  "LG",
  "Samsung",
  "Whirlpool",
  "Panasonic",
  "Toshiba",
  "Bosch",
  "Electrolux",
  "Midea",
  "Sharp",
  "Hitachi",
  "Haier",
  "Godrej",
  "Siemens",
  "IFB",
  "Daewoo",
  "GE Appliances",
  "Maytag",
  "Frigidaire",
  "Kelvinator",
  "Candy",
];

const BrandMarquee = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-6">
      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {/* duplicate so it loops smoothly */}
        {[...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="text-lg font-semibold text-gray-700 whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;

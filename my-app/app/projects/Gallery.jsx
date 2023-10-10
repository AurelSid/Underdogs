"use client"
import React from "react";
import portfolio from "./portfolio";
import { motion } from "framer-motion";
import { useState } from "react";
const Gallery = ({ projectId }) => {
  const galleryImages = portfolio[projectId]?.galleryimage || [];
  const [delay, setDelay] = useState(0.5);
  return (
    <div className="w-full h-full bg-[#d4d4d4]">
      <div className="my-20 mx-10 grid grid-cols-3 gap-10">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-xl aspect-square"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 1.5,
              delay: delay + index * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

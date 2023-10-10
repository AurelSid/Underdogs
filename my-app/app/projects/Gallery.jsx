import React from "react";
import portfolio from "./portfolio";
const Gallery = ({ projectId }) => {
  const galleryImages = portfolio[projectId]?.galleryimage || [];

  return (
    <div className="w-full h-full bg-[#d4d4d4]">
      <div className="my-20 mx-5 grid grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="rounded-xl aspect-square"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

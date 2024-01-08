import React from "react";
import { images } from "./constant";

const ImageGallery: React.FC = () => {
  return (
    <div className="container mx-auto w-full p-2 md:p-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={""} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

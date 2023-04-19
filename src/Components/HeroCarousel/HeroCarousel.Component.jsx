import React, { useState } from "react";
import HeroSlider from "react-slick";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    //img
    [{}],
  ]);
  return (
    <>
      <div clasName="lg:hidden">
        <HeroSlider />
        {images.map((image) => {
          <div className="w-full h-56 md:h-80 py-3">
            <img
              src=""
              alt="Hero banner"
              className="w-full h-full rounded-md object-cover"
            />
          </div>;
        })}
      </div>
    </>
  );
  return <div>HeroCarousel</div>;
};

export default HeroCarousel;

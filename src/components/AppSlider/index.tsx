"use client";

import { useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";

const Slider = ({ images, className }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${style.slider} ${className ? className : ""}`}>
      <div className={style.slideInner}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/static/${images[currentIndex]}`}
          alt={`Slide ${currentIndex}`}
          width={200}
          height={200}
        />
      </div>
      <button className={style.prevButton} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={style.nextButton} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;

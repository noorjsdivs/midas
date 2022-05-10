import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images1 from "../../public/assets/images/img1.jpg";
import images2 from "../../public/assets/images/img2.JPG";
import images3 from "../../public/assets/images/img3.jpg";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image
            loading="lazy"
            src={images2}
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src={images1}
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src={images3}
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface SlideItemProps {
  title: string;
  image:
    | "storegg.png"
    | "storegg-cms.png"
    | "logo-retech.png"
    | "logo-discord.png";
}

const SlideItem = (props: SlideItemProps) => {
  const { title, image } = props;
  const WIDTH = 1200;
  const HEIGHT = 600;
  return (
    
      <SwiperSlide className="img-project">
        <p>{title}</p>
        <hr />
        <Image
          src={`/images/project/${image}`}
          width={WIDTH}
          height={HEIGHT}
          alt="image"
        />
      </SwiperSlide>
    
  );
};

export default SlideItem;

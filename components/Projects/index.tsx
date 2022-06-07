import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Projects = () => {
  const WIDTH = 1200;
  const HEIGHT = 600;

  const arrImage = [
    {
      title: "StoreGG",
      url: "storegg.png",
    },
    {
      title: "StoreGG-CMS",
      url: "storegg-cms.png",
    },
    {
      title : "ReTech",
      url : "logo-retech.png"
    },
    {
      title : "Gamefeed Discord Bot",
      url : "logo-discord.png"
    }
  ];

  return (
    <>
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto mb-5">
                <h2>Things I have designed and made for my portfolio</h2>
              </div>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {arrImage.map((e) => {
                  return (
                    <SwiperSlide
                      key={`${e.title}-${e.url}`}
                      className="img-project"
                    >
                      <p>{e.title}</p>
                      <hr />
                      <Image
                        src={`/images/project/${e.url}`}
                        width={WIDTH}
                        height={HEIGHT}
                        alt="image"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

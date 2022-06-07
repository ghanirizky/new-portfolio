import React from "react";
import {
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import myProjects from "../../public/files/project_features.json";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

import Image from "next/image";

const Projects = () => {
  const WIDTH = 1200;
  const HEIGHT = 600;

  const projectData = myProjects;

  return (
    <>
      <section className="project py-auto px-auto" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <u>
                <h2>Portfolio</h2>
              </u>
              <div className="col-lg-8 mx-auto mb-5"></div>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                modules={[
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCoverflow,
                  Navigation,
                ]}
                spaceBetween={50}
                slidesPerView={2}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={{ hideOnClick: true }}
                scrollbar={{ draggable: true }}
                pagination={{ type: "fraction" }}
              >
                {projectData.map((e) => {
                  return (
                    <SwiperSlide
                      key={`${e.title}-${e.image}`}
                      className="border border-dark rounded mb-5"
                    >
                      <p className="mx-auto font-weight-bold">{e.title}</p>
                      <div className="container__image">
                        <Image
                          className="image__project"
                          src={`/images/project/${e.image}`}
                          width={WIDTH}
                          height={HEIGHT}
                          alt="image"
                        />
                        <a href={e.url} target="_blank" rel="noreferrer">
                          <div className="middle">
                            <div className="text">
                              See More{" "}
                              <UilExternalLinkAlt
                                size="15"
                                className="mx-auto mb-1"
                              />
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* </a> */}
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

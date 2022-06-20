import React, { useState, useCallback, useEffect } from "react";
import { Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import myProjects from "../../public/files/project_features.json";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

import Image from "next/image";
import SeeMoreButton from "./SeeMoreButton";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import AboveDiv from "../Atom/AboveDiv"

interface ProjectsProp{
  isBreakPoint : boolean
}

const Projects = (props: ProjectsProp) => {
  const WIDTH = 1200;
  const HEIGHT = 600;

  const {isBreakPoint} = props
  const projectData = myProjects;

  return (
    <>
    <AboveDiv isBreakPoint = {isBreakPoint} classView = "above-project"/>
      <section className="project py-auto px-auto" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mx-auto col-12">
              <h2>Portfolio</h2>
              <div className="col-lg-8 mx-auto mb-4"></div>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                modules={[Pagination, Scrollbar, A11y, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={isBreakPoint ? 1 : 2}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                scrollbar={{ draggable: true }}
                pagination={{ type: "bullets", clickable: true }}
              >
                {projectData.map((e) => {
                  return (
                    <SwiperSlide
                      key={`${e.title}-${e.image}`}
                      className="border border-dark rounded mb-5"
                    >
                      <p className="mx-auto font-weight-bold project__title">
                        {e.title}
                      </p>
                      <hr className="border border-dark mt-0 mx-auto"/>
                      <div className="container__image">
                        <Image
                          className="image__project"
                          src={`/images/project/${e.image}`}
                          width={WIDTH}
                          height={HEIGHT}
                          alt="image"
                        />
                        <SeeMoreButton url={e.url} />
                      </div>
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

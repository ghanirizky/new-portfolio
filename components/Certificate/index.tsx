import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import myCertificate from "../../public/files/certificate.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";

import Image from "next/image";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import AboveDiv from "../Atom/AboveDiv"

interface CertificateProp{
  isBreakPoint: boolean
}


const Certificate = (props: CertificateProp) => {
  const WIDTH = 1200;
  const HEIGHT = 700;

  const {isBreakPoint} = props
  let certificateData = myCertificate;

  return (
    <>
    <AboveDiv isBreakPoint = {isBreakPoint} classView = "above-certificate"/>
      <section className="project py-auto px-auto" id="certificate">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-center mx-auto col-12">
              <h2>Certificate</h2>
              <div className="col-lg-8 my-auto mx-auto"></div>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                modules={[EffectCube, Pagination]}
                className="mySwiper mb-5"
              >
                {certificateData.map((e) => {
                  return (
                    <SwiperSlide key={e.title + e.image}>
                      <Image
                        className="image__project border border-dark my-auto"
                        src={`/images/certificate/${e.image}`}
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

export default Certificate;

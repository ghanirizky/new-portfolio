import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Things I have designed for digital media agencies</h2>
              </div>
              <Carousel>
                <div>
                  <Image
                    src="/images/project/project-image01.png"
                    width={1504}
                    height={1018}
                    alt= "image"
                  />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <Image
                    src="/images/project/project-image02.png"
                    width={1504}
                    height={1018}
                    alt= "image"
                  />
                  <p className="legend">Legend 1</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

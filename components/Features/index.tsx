import React from "react";
import Experiences from "./Experiences";
import Educations from "./Educations";

const Features = () => {
  return (
    <>
      {/* FEATURES */}
      <section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <Experiences />
            <Educations />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

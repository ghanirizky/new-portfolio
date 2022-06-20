import React from "react";
import Experiences from "./Experiences";
import Educations from "./Educations";
import AboveDiv from "../Atom/AboveDiv"


interface ResumeProp{
  isBreakPoint: boolean
}

const Resume = (props: ResumeProp) => {
  const {isBreakPoint} = props
  return (
    <>
    <AboveDiv isBreakPoint = {isBreakPoint} classView = "above-resume"/>
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

export default Resume;

import React from "react";
import TimelineItem from "./TimelineItem";

const Experiences = () => {
  return (
    <>
      <div className="col-lg-6 col-12">
        <h2 className="mb-4">Experiences</h2>
        <div className="timeline">
          <TimelineItem
            year={"2022"}
            title="Full-Stack Engineer"
            subTitle={"Segari"}
            desc={`Stack: Java Spring Boot, ReactJS, Flutter-Dart. Encoding project requirements by converting workflow information into computer language on internal apps`}
            url={"https://segari.id/"}
          />
          <TimelineItem
            year={"2021"}
            title="Programmer Intern"
            subTitle={"PROSIA"}
            desc={`Stack: NodeJS, ReactJ. Making REST API Back-End for Indonesia trading application called "INATRADE" using Node.js with ExpressJS framework`}
            url={"https://prosia.co.id/"}
          />
        </div>
      </div>
    </>
  );
};

export default Experiences;

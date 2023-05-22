import React from "react";
import TimelineItem from "./TimelineItem";

const Educations = () => {
  return (
    <>
      <div className="col-lg-6 col-12">
        <h2 className="mb-4 mobile-mt-2">Educations</h2>
        <div className="timeline">
        <TimelineItem
            year={"2023"}
            title="Computer Science"
            subTitle={"S2"}
            desc={"Bina Nusantara University. Cumulative GPA: 3.9/4.0 (S2)"}
            url={"https://binus.ac.id/"}
          />
          <TimelineItem
            year={"2022"}
            title="Computer Science"
            subTitle={"S1"}
            desc={"Bina Nusantara University. Cumulative GPA: 3.66/4.0 (S1)"}
            url={"https://binus.ac.id/"}
          />
          <TimelineItem
            year={"2018"}
            title="High School"
            subTitle={"Science"}
            desc={"SMA Negeri 2 Bogor"}
            url={"https://sman2kotabogor.sch.id/"}
          />
          <TimelineItem
            year={"2015"}
            title="Junior High School"
            desc={"SMP Negeri 5 Bogor"}
            url={"https://www.instagram.com/smpn_5_bogor/"}
          />
        </div>
      </div>
    </>
  );
};

export default Educations;

import React from "react";
import TimelineItem from "./TimelineItem";

const Educations = () => {
  return (
    <>
      <div className="col-lg-6 col-12">
        <h2 className="mb-4 mobile-mt-2">Educations</h2>
        <div className="timeline">
          <TimelineItem
            year={"Present"}
            title="Computer Science"
            subTitle={"Master Degree"}
            desc={
              "Master Track of Computer Science at Bina Nusantara University. Cumulative GPA: 3.66/4.0 (Until Semester 6 / S1)"
            }
          />
          <TimelineItem
            year={"2015"}
            title="High School"
            subTitle={"Science"}
            desc={"SMA Negeri 2 Bogor"}
          />
          <TimelineItem
            year={"2012"}
            title="Junior High School"
            subTitle={"Master Degree"}
            desc={"SMP Negeri 5 Bogor"}
          />
        </div>
      </div>
    </>
  );
};

export default Educations;

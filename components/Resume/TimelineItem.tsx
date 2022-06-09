import React from "react";

type TimelineItemProps = {
  year: String;
  title: String;
  subTitle?: String;
  desc: String;
};

const TimelineItem = (props: TimelineItemProps) => {
  const { year, title, subTitle, desc } = props;
  return (
    <>
      <div className="timeline-wrapper">
        <div className="timeline-yr">
          <span>{year}</span>
        </div>
        <div className="timeline-info">
          <h3>
            <span>{title}</span>
            <small>{subTitle}</small>
          </h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;

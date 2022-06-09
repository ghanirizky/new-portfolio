import React from "react";

type TimelineItemProps = {
  year: string;
  title: string;
  subTitle?: string;
  desc: string;
  url: string;
};

const TimelineItem = (props: TimelineItemProps) => {
  const { year, title, subTitle, desc, url } = props;
  return (
    <>
      <div className="timeline-wrapper">
        <div className="timeline-yr">
          <span>{year}</span>
        </div>
        <div className="timeline-info">
          <div className="resume__title">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              data-toggle="tooltip"
              title={url}
            >
              <p>
                <span>{title}</span>
                <small>{subTitle}</small>
              </p>
            </a>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;

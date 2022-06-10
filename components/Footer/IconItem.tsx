import React from "react";

interface IconItemProps {
  name: String;
  bgcolor: string;
  icon: string;
  url: string;
}

const IconItem = (props: IconItemProps) => {
  const { name, bgcolor, icon, url } = props;

  return (
    <>
      <a
        className="btn btn-primary border mb-3 mx-2"
        style={{ backgroundColor: `${bgcolor}` }}
        href={url}
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        <i className={`${icon} mr-2`}></i>
        {name}
      </a>
    </>
  );
};

export default IconItem;

import React from "react";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

interface SeeMoreButtonProps {
  url: string;
}

const SeeMoreButton = (props: SeeMoreButtonProps) => {
  const { url } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="middle">
        <div className="text">
          See More <UilExternalLinkAlt size="15" className="" />
        </div>
      </div>
    </a>
  );
};

export default SeeMoreButton;

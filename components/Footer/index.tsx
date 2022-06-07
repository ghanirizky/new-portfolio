import React from "react";
import IconItem from "./IconItem";
import footerIconData from "../../public/files/footer_icon.json";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center ">
      {footerIconData.map((e) => {
        return (
          <IconItem
            key={e.name}
            name={e.name}
            bgcolor={e.bgcolor}
            icon={e.icon}
            url={e.url}
          />
        );
      })}
    </footer>
  );
};

export default Footer;

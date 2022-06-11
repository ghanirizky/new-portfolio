import Image from "next/image";
import React from "react";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import ContactForm from "./ContactForm";

const Contacts = () => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <>
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 text-center">
              <Image
                src="/images/undraw/undraw_male_avatar_323b.svg"
                width={isBreakpoint ? 250 : 500}
                height={isBreakpoint ? 250 : 500}
                alt="image"
              />
            </div>
            <div className="col-lg-2 col-12"></div>
            <div className="col-lg-5 col-12">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

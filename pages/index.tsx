/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Navbar from '../components/Navbar'
import About from "../components/About";
import Projects from "../components/Projects"
import Features from "../components/Features"


const Home: NextPage = () => {
  return (
    <>
      
      <Navbar />
      <About />
      <Projects />
      <Features />
      


      
      {/* CONTACT */}
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
              <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say hello</h3>
                  <p className="footer-text mb-0">010 020 0960</p>
                  <p>
                    <a href="mailto:hello@company.co">hello@company.co</a>
                  </p>
                </div>
                <ul className="social-links">
                  <li>
                    <a
                      href="#"
                      className="uil uil-dribbble"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Dribbble"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="uil uil-instagram"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Instagram"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="uil uil-youtube"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Youtube"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h2 className="mb-4">Interested to work together? Lets talk</h2>
                <form action="" method="get">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        id="name"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        rows={6}
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="ml-lg-auto col-lg-5 col-12">
                      <input
                        type="submit"
                        className="form-control submit-btn"
                        defaultValue="Send Button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <p className="copyright-text text-center">
                Copyright © 2019 Company Name . All rights reserved
              </p>
              <p className="copyright-text text-center">
                Designed by{" "}
                <a rel="nofollow" href="https://www.facebook.com/tooplate">
                  Tooplate
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

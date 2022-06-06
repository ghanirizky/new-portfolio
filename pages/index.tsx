/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Navbar from '../components/Navbar'
import About from "../components/About";


const Home: NextPage = () => {
  return (
    <>
      
      <Navbar />
      <About />
      
      {/* PROJECTS */}
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Things I have designed for digital media agencies</h2>
              </div>
              <Carousel>
                <div>
                  <Image src="/images/project/project-image01.png" width={1504} height={1018}/>
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <Image src="/images/project/project-image02.png" width={1504} height={1018}/>
                  <p className="legend">Legend 1</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Experiences</h2>
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2019</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Project Manager</span>
                      <small>Best Studio</small>
                    </h3>
                    <p>
                      Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam
                      laoreet libero ac pharetra feugiat. Cras ac fermentum
                      nunc, a faucibus nunc.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2018</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>UX Designer</span>
                      <small>Digital Ace</small>
                    </h3>
                    <p>
                      Fusce rutrum augue id orci rhoncus molestie. Nunc auctor
                      dignissim lacus vel iaculis.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2016</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>UI Freelancer</span>
                    </h3>
                    <p>
                      Sed fringilla vitae enim sit amet cursus. Sed cursus
                      dictum tortor quis pharetra. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2014</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>
                        Junior Designer<small>Crafted Co.</small>
                      </span>
                    </h3>
                    <p>
                      Cras scelerisque scelerisque condimentum. Nullam at
                      volutpat mi. Nunc auctor ipsum eget magna consequat
                      viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations</h2>
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2017</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Mobile Web</span>
                      <small>Master Design</small>
                    </h3>
                    <p>
                      Please tell your friends about Tooplate website. That
                      would be very helpful. We need your support.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2015</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>User Interfaces</span>
                      <small>Creative Agency</small>
                    </h3>
                    <p>
                      <a
                        rel="nofollow"
                        href="https://www.facebook.com/tooplate"
                      >
                        Tooplate
                      </a>{" "}
                      is a great website to download HTML templates without any
                      login or email.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2013</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Artwork Design</span>
                      <small>New Art School</small>
                    </h3>
                    <p>
                      You can freely use Tooplates templates for your business
                      or personal sites. You cannot redistribute this template
                      without a permission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

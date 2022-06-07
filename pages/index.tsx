/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";

import Navbar from '../components/Navbar'
import About from "../components/About";
import Projects from "../components/Projects"
import Features from "../components/Features"
import Footer from "../components/Footer";


const Home: NextPage = () => {
  return (
    <>
      
      <Navbar />
      <About />
      <hr />
      <Projects />
      <hr />
      <Features />
      <hr />
      {/* CONTACT */}
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row">
            
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
      <Footer />
    </>
  );
};

export default Home;

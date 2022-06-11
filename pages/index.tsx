/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import Meta from "../components/Meta";
import Certificate from "../components/Certificate";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <About />
      <hr />
      <Projects />
      <hr />
      <Certificate />
      <hr />
      <Resume />
      <hr />
      <Contacts />
      <hr />
      <Footer />
    </>
  );
};

export default Home;

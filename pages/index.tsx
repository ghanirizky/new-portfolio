/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const Home: NextPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossOrigin="anonymous"
      ></link>
      <Navbar />
      <About />
      <hr />
      <Projects />
      <hr />
      <Resume />
      <hr />
      <Footer />
    </>
  );
};

export default Home;

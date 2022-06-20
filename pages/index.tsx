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
import { useMediaQuery } from "../helpers/useMediaQuery";

const Home: NextPage = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <>
      <Meta />
      <Navbar isBreakPoint = {isBreakpoint}/>
      <About />
      <hr />
      <Projects isBreakPoint = {isBreakpoint}/>
      <hr />
      <Certificate isBreakPoint = {isBreakpoint}/>
      <hr />
      <Resume isBreakPoint = {isBreakpoint}/>
      <hr />
      <Contacts />
      <hr />
      <Footer />
    </>
  );
};

export default Home;

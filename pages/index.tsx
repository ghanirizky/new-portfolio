/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ghani RN - Portfolio</title>
        <link rel="icon" type="image/png" href="/images/logo-ghani-circle.png"></link>
        <meta
          name="description"
          content="Hi, Im Ghani Rizky Naufal. Im a Web Developer, Programmer and Software Engineer. I adore coding and developing new things and I'm skilled at working with people and am a laid-back individual that is enjoyable to work with."
        />
        <meta name="og:title" content="Ghani RN - My Portfolio" />
        <meta
          name="og:description"
          content="Hi, Im Ghani Rizky Naufal. Im a Web Developer, Programmer and Software Engineer. I adore coding and developing new things and I'm skilled at working with people and am a laid-back individual that is enjoyable to work with."
        />
        <meta
          name="og:image:secure_url"
          content="https://ik.imagekit.io/0rdat3peflx/logo-ghani_bGmgHrkd0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654834447319"
        />
        <meta
          name="og:image"
          content="https://ik.imagekit.io/0rdat3peflx/logo-ghani_bGmgHrkd0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654834447319"
        />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
      </Head>
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

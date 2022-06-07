import { UilLinkedin, UilGithub  } from '@iconscout/react-unicons'
import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <p>
                  <span className="mobile-block">Welcome to my website!</span>
                </p>
                <h1 className="animated animated-text">
                  <span className="mr-2">Hi, Im</span>
                  <div className="animated-info">
                    <span className="animated-item">Ghani Rizky N</span>
                    <span className="animated-item">WebDeveloper</span>
                    <span className="animated-item">Programmer</span>
                  </div>
                </h1>
                <p>
                  {`I adore coding and developing new things and `} 
                  {`I'm skilled at working with people and am a laid-back individual that is enjoyable to work with.`}
                </p>
                <div className="custom-btn-group mt-4">
                  <a href="/files/CV_ATS_Ghani.pdf" target="_blank" rel="noreferrer" className="btn mr-lg-2 custom-btn">
                    <i className="uil uil-file-alt" /> Download Resume
                  </a>
                  <a href="https://www.linkedin.com/in/ghani-rizkyy/" target="_blank" rel="noreferrer" className="btn mr-lg-2 custom-btn">
                    <UilLinkedin size="15" className="mb-1" /> LinkedIn
                  </a>
                  <a href="https://github.com/ghanirizky" target="_blank" rel="noreferrer" className="btn mr-lg-2 custom-btn">
                    <UilGithub size="15" className="mb-1"/> Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <Image
                  src="/images/undraw/undraw_software_engineer_lvl5.svg"
                  className="img-fluid"
                  alt="svg image"
                  layout='fill'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import { Link } from "react-router-dom";
import Banner from "../../assets/AboutBottomBanner.svg";
import { Fade } from "react-reveal";

const AboutBottomBanner = () => {
  return (
    <div className="p-4 relative">
      <Fade bottom>
        <img src={Banner} alt="banner" className="w-full hidden md:block" />
        <div className="md:absolute  md:bottom-72 md:left-32 md:w-[600px] flex flex-col items-center md:block ">
          <h2 className="font-bold  text-white md:text-3xl md:mb-3">
            Experience Excellence,
          </h2>
          <h2 className="font-bold text-white md:text-4xl md:mb-4">
            Enroll Now!
          </h2>
          <p className="text-black text-center md:text-start md:text-white text-sm md:mb-2 md:text-base">
            Are you ready to embark on a journey of innovation and mastery in
            the world of software development? Look no further! At Alo
            Educational Hub, we offer an unparalleled learning experience that
            will empower you with the skills and knowledge needed to thrive in
            the dynamic field of software development.
          </p>
          <Link to="/getstarted">
            <button className="mt-5 md:mt-0 md:text-white border md:border-white md:py-1 px-3 rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default AboutBottomBanner;

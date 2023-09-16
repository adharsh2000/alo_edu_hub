import BannerImg from "../../assets/Aboutbanner.svg";
import { Fade } from "react-reveal";

const AboutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImg})` }}
      className="bg-no-repeat bg-cover h-[400px] flex flex-col items-center justify-center gap-2"
    >
      <Fade bottom>
        <h2 className="font-bold text-white text-5xl">
          About <span className="text-app-color">ALO </span> Hub
        </h2>
        <p className="text-center text-white max-w-4xl p-3">
          Alo Hub is Your premier destination for comprehensive software
          development courses and training with a focus on job placements. We
          are committed to empowering aspiring software developers with the
          skills, knowledge, and practical experience necessary to succeed in
          today's competitive tech industry.
        </p>
      </Fade>
    </div>
  );
};

export default AboutBanner;

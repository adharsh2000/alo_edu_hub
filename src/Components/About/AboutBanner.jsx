import BannerImg from "../../assets/Aboutbanner.svg";
import { Fade } from "react-reveal";

const AboutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImg})`}}
      className="bg-no-repeat bg-cover h-[400px] flex flex-col items-center justify-center gap-2"
    >
      <Fade bottom>

      <h2 className="font-bold text-white text-5xl">
        About <span className="text-app-color">ALO </span> Hub
      </h2>
      <p className="text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> interdum
        ullamcorper sed pharetra sene.
      </p>
      </Fade>
    </div>
  );
};

export default AboutBanner;

import BannerImg from "../../assets/FaqBanner.svg";
import { Fade } from "react-reveal";

const FaqBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImg})` }}
      className="bg-no-repeat bg-cover h-[400px] flex flex-col items-center justify-center gap-2"
    >
      <Fade bottom>
      <h2 className="text-white font-bold text-6xl">FAQ</h2>
      <p className="text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> interdum
        ullamcorper sed pharetra sene.
      </p>
      </Fade>
    </div>
  );
};

export default FaqBanner;

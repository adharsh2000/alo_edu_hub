import BannerImg from "../../assets/Aboutbanner.svg";

const AboutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImg})`}}
      className="bg-no-repeat h-[400px] flex flex-col items-center justify-center gap-2"
    >
      <h2 className="font-bold text-white text-5xl">
        About <span className="text-app-color">ALO </span> Hub
      </h2>
      <p className="text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> interdum
        ullamcorper sed pharetra sene.
      </p>
    </div>
  );
};

export default AboutBanner;

import Banner from "../../assets/AboutBottomBanner.svg";

const AboutBottomBanner = () => {
  return (
    <div className="p-4 relative">
      <img src={Banner} alt="banner" className="w-full" />
      <div className="absolute bottom-16 left-14 md:bottom-72 md:left-32 w-72 md:w-96">
        <h2 className="font-bold  text-white md:text-3xl md:mb-3">Experience Excellence,</h2>
        <h2 className="font-bold text-white md:text-4xl md:mb-4">Enroll Now!</h2>
        <p className="text-white text-xs md:mb-2 md:text-base">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          when an unknown printer took a galley of type and scrambled it to make
        </p>
        <button className="text-white border border-white py-1 px-3 rounded-md">Get Started</button>
      </div>
    </div>
  );
};

export default AboutBottomBanner;

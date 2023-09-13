import Banner from "../../assets/AboutBottomBanner.svg";

const AboutBottomBanner = () => {
  return (
    <div className="p-4 relative">
      <img src={Banner} alt="banner" />
      <div className="absolute bottom-56 left-32 w-96">
        <h2 className="font-bold text-white text-3xl mb-1">Experience Excellence,</h2>
        <h2 className="font-bold text-white text-4xl mb-2">Enroll Now!</h2>
        <p className="text-white mb-2">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          when an unknown printer took a galley of type and scrambled it to make
        </p>
        <button className="text-white border border-white py-1 px-3 rounded-md">Get Started</button>
      </div>
    </div>
  );
};

export default AboutBottomBanner;

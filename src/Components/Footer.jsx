import S1 from "../assets/S1.svg"
import S2 from "../assets/S2.svg"
import S3 from "../assets/S3.svg"

const Footer = () => {
  return (
    <div className="md:h-[300px] bg-[#1B1D21]">
      <div className="flex flex-col items-center">
        <h3 className="text-white font-bold text-sm mt-8">Upskill for a better future</h3>
        <h2 className="text-white font-bold text-2xl mt-5">Request more Information</h2>
        <p className="text-white text-center text-xs mt-5">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          <br />
          when an unknown printer took a galley of type and scrambled
        </p>
        <button className="bg-app-color mt-5 text-white p-3 rounded-md">Get Started</button>
      </div>
      <div className="border border-app-color mt-4"></div>
      <div className="flex flex-col md:flex-row mt-3 items-center justify-between px-6 gap-3 pb-5 md:pb-0">
        <h3 className="text-app-color order-2 md:order-1">Alohub@2023 All rights reserved.</h3>
        <div className="flex gap-4 md:mr-24 order-1 md:order-2">
            <a href="" className="text-app-color font-bold">Home</a>
            <a href="" className="text-app-color font-bold">About</a>
            <a href="" className="text-app-color font-bold">Courses</a>
            <a href="" className="text-app-color font-bold">Contact</a>
        </div>
        <div className="flex gap-6 order-3">
            <a href=""><img src={S1} alt="facebook" /></a>
            <a href=""><img src={S2} alt="twitter" /></a>
            <a href=""><img src={S3} alt="instagram" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

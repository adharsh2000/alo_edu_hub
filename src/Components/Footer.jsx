import { Link } from "react-router-dom";
import S1 from "../assets/S1.svg";
import S2 from "../assets/S2.svg";
import S3 from "../assets/S3.svg";

const Footer = () => {
  return (
    <div className="md:h-[300px] bg-[#1B1D21]">
      <div className="flex flex-col items-center">
        <h3 className="text-white font-bold text-sm mt-8">
          Upskill for a better future
        </h3>
        <h2 className="text-white font-bold text-2xl mt-5">
          Request more Information
        </h2>
        <p className="text-white text-center text-xs mt-5 ">
          Get industry-leading software development courses and training from
          <br />
          our reputable organization. Boost your skills and career with expert
          guidance and hands-on projects.
        </p>
        <Link to="/getstarted">
          <button className="bg-app-color mt-5 text-white p-3 rounded-md">
            Get Started
          </button>
        </Link>
      </div>
      <div className="border border-app-color mt-4"></div>
      <div className="flex flex-col md:flex-row mt-3 items-center justify-between px-6 gap-3 pb-5 md:pb-0">
        <h3 className="text-app-color order-2 md:order-1">
          <Link className="mr-1" to="mailto:aloeducationalhub@gmail.com">
            Alohub@2023
          </Link>
          All rights reserved.
        </h3>
        <div className="flex gap-4 md:mr-24 order-1 md:order-2">
          <Link to="/" className="text-app-color font-bold">
            Home
          </Link>
          <Link to="/about" className="text-app-color font-bold">
            About
          </Link>
          <Link to="/faq" className="text-app-color font-bold">
            Faq
          </Link>
          <Link to="/contact" className="text-app-color font-bold">
            Contact
          </Link>
        </div>
        <div className="flex gap-6 order-3">
          <Link
            to="https://www.facebook.com/profile.php?id=61551218908619&mibextid=ZbWKwL"
            target="_blank"
          >
            <img src={S1} alt="facebook" />
          </Link>
          <a href="">
            <img src={S2} alt="twitter" />
          </a>
          <Link
            to="https://instagram.com/alo_educational_hub?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <img src={S3} alt="instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

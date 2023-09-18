import S1 from "../../assets/S1.svg";
import S2 from "../../assets/S2.svg";
import S3 from "../../assets/S3.svg";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const ContactSectionTwo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-1 mt-10 mb-16 px-10">
      <div className="flex flex-col items-center gap-4">
        <Fade bottom>
          <h2 className="font-bold text-lg"> FOLLOW OUR SOCIALS </h2>
          <div className="flex gap-4">
            <Link
              to="https://www.facebook.com/profile.php?id=61551440452176&mibextid=nW3QTL"
              target="_blank"
            >
              <img src={S1} alt="facebook" />
            </Link>
            <img src={S2} alt="twitter" />
            <Link
              to="https://instagram.com/alo_educational_hub?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <img src={S3} alt="instagram" />
            </Link>
          </div>
        </Fade>
      </div>
      <div className="flex flex-col items-center ">
        <Fade bottom>
          <h2 className="font-bold text-center text-lg mb-3">COME VISIT US</h2>
          <p>Chettikulam Junction, Hindu</p>
          <p>College Road,Chetti Kulam,</p>
          <p>Chenthooran Nagar,</p>
          <p>Nagercoil-1</p>
        </Fade>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Fade bottom>
          <h2 className="font-bold text-lg">Connect with us</h2>
          <div className="flex gap-2">
            <img src={Phone} alt="Phone" />
            <h4>+(91) 999-472-5508</h4>
          </div>
          <h4>+(91) 739-585-0903</h4>
          <div className="flex gap-2">
            <img src={Mail} alt="Mail" />
            <h4><Link to="mailto:contact@aloeducationalhub.com">contact@aloeducationalhub.com</Link></h4>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ContactSectionTwo;

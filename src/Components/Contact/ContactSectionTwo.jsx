import S1 from "../../assets/S1.svg";
import S2 from "../../assets/S2.svg";
import S3 from "../../assets/S3.svg";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";

const ContactSectionTwo = () => {
  return (
    <div className="flex justify-around gap-1 mt-10 mb-16 px-10">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-lg"> FOLLOW OUR SOCIALS </h2>
        <div className="flex gap-4">
          <img src={S1} alt="facebook" />
          <img src={S2} alt="twitter" />
          <img src={S3} alt="instagram" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <h2 className="font-bold text-center text-lg mb-3">COME VISIT US</h2>
        <p>Chettikulam Junction, Hindu</p>
        <p>College Road,Chetti Kulam,</p>
        <p>Chenthooran Nagar,</p>
        <p>Nagercoil-1</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-bold text-lg">Connect with us</h2>
        <div className="flex gap-2">
          <img src={Phone} alt="Phone" />
          <h4>+(91) 739-585-0903</h4>
        </div>
        <div className="flex gap-2">
          <img src={Mail} alt="Mail" />
          <h4>contact@alogroups.com</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionTwo;

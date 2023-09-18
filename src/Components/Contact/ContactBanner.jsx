import BannerImg from "../../assets/ContactBanner.svg";
import { Fade } from "react-reveal";

const ContactBanner = () => {
  return (
    <>
      <div className="h-20"></div>
      <div
        style={{ backgroundImage: `url(${BannerImg})` }}
        className="bg-no-repeat bg-cover h-[400px] flex flex-col items-center justify-center gap-2"
      >
        <Fade bottom>
          <h2 className="text-white font-bold text-6xl">Contact</h2>
        </Fade>
        <p className="text-white text-center max-w-4xl p-3">
          If you have any questions, or inquiries, or need further information
          about our courses, training programs, or placement services, our
          dedicated team is here to assist you. Please feel free to reach out to
          us.
        </p>
      </div>
    </>
  );
};

export default ContactBanner;

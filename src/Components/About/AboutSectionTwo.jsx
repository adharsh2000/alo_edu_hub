import img1 from "../../assets/AboutS21.svg";
import { Fade } from "react-reveal";

const AboutSectionTwo = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 mt-8">
      <div>
        <Fade bottom>
          <h2 className="font-bold text-3xl text-center mb-5">Our MIssion</h2>
          <p className="text-gray-500 mx-auto text-center ">
            Empowering students with innovative software skills for career
            success
          </p>
        </Fade>
      </div>
      <div className="w-[80%] flex flex-col md:flex-row md:justify-center gap-10 mt-9 mx-auto">
        <Fade bottom>
          <div className="md:w-[50%] flex flex-col items-center justify-center">
            <p className="text-center md:text-start mb-6 text-gray-500">
              At Alo Educational Hub, we are passionate about creating a
              positive and enriching learning experience for our students. We
              believe in the power of continuous self-improvement and strive to
              raise the bar with each training program we offer. Our mission is
              to turn our vision into reality by becoming a renowned training
              organization globally, respected for our innovative and systematic
              approach.
            </p>
            <p className="text-center md:text-start text-gray-500">
              We believe that knowledge has no boundaries, and our commitment to
              growth knows no limits. We embrace the evolution of technology by
              innovating and adapting. As we grow our network, we add fresh
              programs for advanced learning that get students ready for the
              digital world.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={img1} alt="img" className="w-80" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSectionTwo;

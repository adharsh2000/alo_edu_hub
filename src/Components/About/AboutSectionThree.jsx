import Arrow from "../../assets/CurleyArrowRight.svg";
import img1 from "../../assets/AboutS31.svg";
import img2 from "../../assets/AboutS32.svg";
import img3 from "../../assets/AboutS33.svg";
import { Fade } from "react-reveal";

const AboutSectionThree = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 mt-8 relative">
      <div className="w-full px-6 mt-8">
        <img src={Arrow} alt="arrow" className="absolute mt-28 md:mt-0" />
        <Fade bottom>
          <h2 className="text-center font-bold text-3xl">
            Embrace a Journey of Learning <br /> Inspire a
            <span className="text-app-color"> Lifetime of Success.</span>
          </h2>
          <p className="text-center mt-20 md:mt-5 text-gray-500 ">
            Unlock your coding potential with our comprehensive software
            development courses. <br /> Gain practical skills, industry
            insights, and hands-on experience. Start your journey today.
          </p>
        </Fade>
      </div>
      <div className="flex flex-col md:flex-row px-20 mt-16 items-center gap-10">
        <Fade bottom>
          <div className="flex flex-col items-center gap-5">
            <img
              src={img1}
              alt="logo"
              className="bg-app-color p-5 rounded-lg"
            />
            <h2 className="font-bold text-lg">Innovation</h2>
            <p className="text-center text-gray-500 ">
              Innovation is at the core of everything we do. Through our
              innovative approach to software development training, we empower
              our students to become the next generation of innovators and
              trailblazers in the field.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex flex-col items-center gap-5">
            <img
              src={img2}
              alt="logo"
              className="bg-app-color p-5 rounded-lg"
            />
            <h2 className="font-bold text-lg">Excellence</h2>
            <p className="text-center text-gray-500 ">
              Our courses are led by industry experts who possess extensive
              experience in software development. They bring real-world
              knowledge and insights to the classroom, ensuring you receive the
              highest quality education.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex flex-col items-center gap-5">
            <img
              src={img3}
              alt="logo"
              className="bg-app-color p-5 rounded-lg"
            />
            <h2 className="font-bold text-lg">Responsibility</h2>
            <p className="text-center text-gray-500 ">
              We understand and embrace our responsibility to empower aspiring
              developers with the skills and knowledge they need to succeed in
              today's rapidly evolving technology landscape.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSectionThree;

import CircularOne from "../assets/CircularOne.svg";
import HeroImg from "../assets/HeroImg.svg";
import BookIcon from "../assets/Book.svg";
import Clock from "../assets/Clock.svg";
import Avatars from "../assets/Avatars.svg";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mb-10">
      <main className="md:h-[550px] flex flex-col-reverse md:flex-row">
        {/* <img src={HeroImg} alt="" /> */}
        <div
          style={{ backgroundImage: `url(${CircularOne})` }}
          className="md:w-[60%] md:ml-6 bg-no-repeat mt-10 flex-col justify-center"
        >
          <Fade bottom>
            <h2 className="font-bold text-4xl md:text-5xl ml-10 pt-12">
              <span className="text-app-color">Best Courses</span> Are
            </h2>

            <h2 className="font-bold text-4xl md:text-5xl ml-10 mt-3 ">
              Waiting To Enrich
            </h2>
            <h2 className="font-bold text-4xl md:text-5xl ml-10 mt-3">
              Your Skill
            </h2>
          </Fade>

          {/* p */}
          <Fade>
            <p className="w-80 md:w-[400px] ml-10 text-sm mt-3 text-gray-500">
              We provide the best services for students. Our utmost priority is
              to earn your trust and ensure your satisfaction throughout your
              learning journey with us.
            </p>
          </Fade>
          <Link to="/getstarted">
            <button className="bg-app-color ml-10 mt-4 mb-10 md:mb-0 text-white p-3 rounded-md">
              Get Started
            </button>
          </Link>
        </div>
        <Fade bottom>
          <div>
            <img src={HeroImg} alt="hero/img" className="mt-10" />
          </div>
        </Fade>
      </main>
      <div className="bg-app-color w-[90%] md:w-[90%] md:h-auto md:p-5 mx-auto p-4 rounded-lg flex flex-col md:flex-row  gap-4">
        <Fade bottom>
          <div className="flex flex-col gap-3 text-center justify-around md:justify-between md:text-start">
            <h2 className="text-white font-bold text-xl md:text-4xl">Why choose Us</h2>
            <p className="text-white text-md md:text-lg text-center md:text-start">
              Our training programs are designed to provide comprehensive and
              up-to-date knowledge in various software domains.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center justify-around md:items-center md:justify-between">
            <img src={BookIcon} alt="book" className="w-10" />
            <p className="text-white text-md md:text-lg">
              Gain hands-on experience with real-world projects
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center justify-around md:items-center md:justify-between">
            <img src={Clock} alt="clock" className="w-10" />
            <p className="text-white text-md md:text-lg">
              Personalized timetables to suit student requirements.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center justify-around md:items-center md:justify-between">
            <img src={Avatars} alt="avatar" className="w-10" />
            <p className="text-white text-md md:text-lg">
              Receive career placement assistance and guidance & earn a
              certificate upon successful completion
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;

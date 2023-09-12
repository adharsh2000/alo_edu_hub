import CircularOne from "../assets/CircularOne.svg";
import HeroImg from "../assets/HeroImg.svg";
import BookIcon from "../assets/Book.svg"
import Clock from "../assets/Clock.svg"
import Avatars from "../assets/Avatars.svg"

const Hero = () => {
  return (
    <div className="mb-10">
      <main className="h-[550px] flex">
        {/* <img src={HeroImg} alt="" /> */}
        <div
          style={{ backgroundImage: `url(${CircularOne})` }}
          className="w-[50%] bg-no-repeat mt-10 flex-col justify-center"
        >
          <h2 className="font-bold text-2xl md:text-5xl ml-10 leading-4 pt-12">
            <span className="text-app-color">Best Courses</span> Are
          </h2>
          <h2 className="font-bold text-2xl md:text-5xl ml-10 mt-3">
            Waiting To Enrich
          </h2>
          <h2 className="font-bold text-2xl md:text-5xl ml-10 mt-3">
            Your Skill
          </h2>

          {/* p */}
          <p className="w-[400px] ml-10 text-sm mt-3 text-gray-500">
            We provide our best service for students always try to achive our
            student trust and satisfaction. We provide our best service for
            students always try to achive our student trust and satisfaction.
          </p>

          <button className="bg-app-color ml-10 mt-4 text-white p-3 rounded-md">
            Get Started
          </button>
        </div>
        <div>
          <img src={HeroImg} alt="hero/img" className="mt-10" />
        </div>
      </main>
      <div className="bg-app-color w-[90%] mx-auto p-4 rounded-lg flex justify-between gap-4">
        <div className="flex flex-col justify-between">
          <h2 className="text-white font-bold text-2xl">Why choose Us</h2>
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet, erat porttitor eget. Vestibulum quis
            orci lacus. Sed in neque in nisi
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
            <img src={BookIcon} alt="book" />
            <p className="text-white text-sm">Practical experience with a live project.</p>
        </div>
        <div className="flex flex-col items-center justify-between">
        <img src={Clock} alt="clock" />
            <p className="text-white text-sm">Flexible timings to suit the needs of the students.</p>
        </div>
        <div className="flex flex-col items-center justify-between">
        <img src={Avatars} alt="avatar" />
            <p className="text-white text-sm">Training provided by well-experienced trainers.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

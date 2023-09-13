import Rating from "../assets/Rating.svg";
import Period from "../assets/Period.svg";
import { Fade } from "react-reveal";

const CourseCard = ({ Heading, content, img }) => {
  return (
    <Fade bottom>
      <div className="bg-white rounded-xl shadow-app-shadow p-3 relative mb-10">
        <img src={img} alt="img" />
        <div className="flex justify-between items-center mt-1">
          <h3 className="font-bold">{Heading}</h3>
          <img src={Rating} alt="rating" />
        </div>
        <p className="text-[10px] text-gray-500 mt-2">{content}</p>
        <div className="border-dotted border-2 border-gray-400 mt-2"></div>
        <img src={Period} alt="period" className="mt-2" />
        <button className="bg-app-color py-2 px-4 rounded-full text-white absolute -bottom-5 left-[50%] -translate-x-[50%]">
          Join Course
        </button>
      </div>
    </Fade>
  );
};

export default CourseCard;

import Rating from "../assets/Rating.svg";
import Period from "../assets/Period.svg";
import Period2 from "../assets/Period2.svg";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CourseCard = ({ Heading, content, img ,period }) => {
  return (
    <Fade bottom>
      <div className="bg-white rounded-xl shadow-app-shadow p-3 relative mb-10 w-96">
        <img src={img} alt="img" />
        <div className="flex justify-between items-center mt-1">
          <h3 className="font-bold">{Heading}</h3>
          <img src={Rating} alt="rating" />
        </div>
        {
          content ? <p className="text-[13px] text-gray-500 mt-2">{content}</p> : <div className="mt-2 h-4"></div>
        }
        <div className="border-dotted border-2 border-gray-400 mt-2"></div>
        {
          period === 3 ?  <img src={Period} alt="period" className="mt-2" /> : <img src={Period2} alt="period" className="mt-2" />
        }
        <Link to="/getstarted">
          <button className="bg-app-color py-2 px-4 rounded-full text-white absolute -bottom-5 left-[50%] -translate-x-[50%]">
            Join Course
          </button>
        </Link>
      </div>
    </Fade>
  );
};

export default CourseCard;

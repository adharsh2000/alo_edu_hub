// import StudentCard from "./StudentCard";
import { Fade } from "react-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestiMonials from "./Carousal/Carousal";

const StudentCardSection = () => {
  return (
    <Fade bottom>
      <div className="mb-20">
        <div className="flex items-center justify-center relative mt-2 mb-10">
          <div>
            <h2 className="font-bold text-3xl text-center mb-5">
              What student’s say
            </h2>
            <p className="text-gray-500 mx-auto  text-center">
              Here you will find valuable feedback from students who have had
              experiences with our various courses
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center md:flex-row justify-center gap-10">
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div> */}
        <TestiMonials />
      </div>
    </Fade>
  );
};

export default StudentCardSection;

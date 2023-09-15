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
              Lorem Ipsum is simply dummy text of the printing.
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

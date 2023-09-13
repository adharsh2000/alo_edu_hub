import StudentCard from "./StudentCard";
import { Fade } from "react-reveal";

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
        <div className="flex justify-center gap-10">
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div>
      </div>
    </Fade>
  );
};

export default StudentCardSection;

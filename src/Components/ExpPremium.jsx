import ExpIcon from "../assets/ExpIcon.svg";
import Exp1 from "../assets/E1.svg";
import Exp2 from "../assets/E2.svg";
import Exp3 from "../assets/E3.svg";
import Exp4 from "../assets/E4.svg";
import Exp5 from "../assets/E5.svg";
import { Fade } from "react-reveal";

const ExpPremium = () => {
  return (
    <div className="mb-10">
      <Fade bottom>
        <div className="flex items-center justify-center relative mb-20">
          <div>
            <h2 className="font-bold text-3xl text-center mb-5">
              What Make Us Unique
            </h2>
            <p className="text-gray-500 mx-auto w-[55%] text-center">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the when an unknown printer took a galley of type and scrambled it
              to make
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
      <div className="flex justify-center gap-10">
        <img src={ExpIcon} alt="exp" className="w-[300px]" />
        <div className="flex flex-col justify-around">
          <div>
            <h2 className="font-bold text-3xl">Premium Learning</h2>
            <h2 className="text-app-color font-bold text-3xl">Experience</h2>
          </div>
          <div className="flex items-center gap-5">
            <img src={Exp1} alt="e1" className="w-[30px]" />
            <h4>Practical experience with a live project.</h4>
          </div>
          <div className="flex items-center gap-5">
            <img src={Exp2} alt="e2" className="w-[30px]" />
            <h4> Training provided by well-experienced trainers.</h4>
          </div>
          <div className="flex items-center gap-5">
            <img src={Exp3} alt="e3" className="w-[30px]" />
            <h4>Certificate of Recognition.</h4>
          </div>
          <div className="flex items-center gap-5">
            <img src={Exp4} alt="e4" className="w-[30px]" />
            <h4>Flexible timings to suit the needs of the students.</h4>
          </div>
          <div className="flex items-center gap-5">
            <img src={Exp5} alt="e5" className="w-[30px]" />
            <h4>100% placement record till date.</h4>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default ExpPremium;

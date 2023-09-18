import Arrow from "../../assets/CurleyArrow.svg";
import img1 from "../../assets/AboutS11.svg";
import img2 from "../../assets/AboutS12.svg";
import img3 from "../../assets/AboutS13.svg";
import { Fade } from "react-reveal";
import Counter from "./Counter";

const AboutSectionOne = () => {
  return (
    <div className="flex flex-col items-center justify-center relative mb-5 mt-3">
      <Fade bottom>
        <div>
          <h2 className="font-bold text-3xl text-center mb-5">What we do</h2>
          <p className="text-gray-500 mx-auto w-[55%] text-center">
            We provide individuals with the necessary skills and knowledge to
            thrive in the dynamic field of technology, enabling students to
            create resilient and scalable software solutions.
          </p>
        </div>
      </Fade>
      <img
        src={Arrow}
        alt="arrow"
        className="inline-block absolute right-2 -top-4 md:-top-3"
      />
      <div className="flex justify-center mt-7">
        <div className="flex flex-col items-center md:flex-row md:w-[80%] md:justify-around gap-9 md:gap-2">
          <Fade bottom>
            <div className="w-96">
              <img src={img1} alt="person" className="mb-3 w-[380px]" />
              <div className="flex">
                <img src={img2} alt="person" className="w-[220px] mr-4" />
                <img src={img3} alt="person" className="w-[143px]" />
              </div>
            </div>
            <div className="w-96 md:w-[60%] flex flex-col justify-center">
              <p className="text-center md:text-start mb-6 text-gray-500">
                At Alo Hub, we specialize in providing outstanding software
                development training to individuals seeking to enhance their
                programming skills and embark on successful careers in the tech
                industry. We provide a supportive learning environment with
                experienced instructors who guide and mentor students throughout
                their educational journey.
              </p>
              <p className="text-center md:text-start text-gray-500">
                After completing our software development courses, students
                receive a reputable certification that attests to their
                proficiency. With our solid industry connections, we offer 100%
                placement assistance, linking graduates with positions that will
                help them advance their careers.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="bg-app-color flex flex-col md:flex-row gap-5 w-[90%] md:w-[80%] mt-10 p-5 rounded-xl justify-around">
        <Fade bottom>
          <div className="flex flex-col items-center">
            <h2 className="font-bold flex text-white text-4xl">
              <Counter num={10} />+
            </h2>
            <p className="text-white">Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold flex text-white text-4xl">
              <Counter num={30} />+
            </h2>
            <p className="text-white">Placements</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold flex text-white text-4xl">
              <Counter num={100} />%
            </h2>
            <p className="text-white">Guaranteed</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold flex text-white text-4xl">
              <Counter num={10} />+
            </h2>
            <p className="text-white">Courses</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSectionOne;

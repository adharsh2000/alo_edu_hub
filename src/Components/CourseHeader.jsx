import Arrow from "../assets/CurleyArrow.svg";

const CourseHeader = () => {
  return (
    <div className="flex items-center justify-center relative mb-5">
      <div>
        <h2 className="font-bold text-3xl text-center mb-5">Our Courses</h2>
        <p className="text-gray-500 mx-auto w-[55%] text-center">
          We offer diverse educational programs designed to empower and inspire
          learners of all backgrounds. Invest in yourself and unlock your full
          potential with our courses.
        </p>
      </div>
      <img
        src={Arrow}
        alt="arrow"
        className="inline-block absolute right-0 -top-5 md:right-2"
      />
    </div>
  );
};

export default CourseHeader;

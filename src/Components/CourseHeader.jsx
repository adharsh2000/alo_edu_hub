import Arrow from "../assets/CurleyArrow.svg";

const CourseHeader = () => {
  return (
    <div className="flex items-center justify-center relative mb-5">
      <div>
        <h2 className="font-bold text-3xl text-center mb-5">Our Courses</h2>
        <p className="text-gray-500 mx-auto w-[55%] text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          when an unknown printer took a galley of type and scrambled it to make
        </p>
      </div>
      <img src={Arrow} alt="arrow" className="inline-block absolute right-2" />
    </div>
  );
};

export default CourseHeader;

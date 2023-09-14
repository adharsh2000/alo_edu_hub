import Arrow from "../../assets/CurleyArrow.svg";
import img1 from "../../assets/AboutS11.svg";
import img2 from "../../assets/AboutS12.svg";
import img3 from "../../assets/AboutS13.svg";

const AboutSectionOne = () => {
  return (
    <div className="flex flex-col items-center justify-center relative mb-5 mt-3">
      <div>
        <h2 className="font-bold text-3xl text-center mb-5">What we do</h2>
        <p className="text-gray-500 mx-auto w-[55%] text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          when an unknown printer took a galley of type and scrambled it to make
        </p>
      </div>
      <img
        src={Arrow}
        alt="arrow"
        className="inline-block absolute right-2 -top-4 md:-top-3"
      />
      <div className="flex justify-center mt-7">
        <div className="flex flex-col items-center md:flex-row md:w-[80%] md:justify-center gap-10">
          <div className="w-80">
            <img src={img1} alt="person" className="mb-3 w-[380px]" />
            <div className="flex">
              <img src={img2} alt="person" className="w-[180px] mr-4" />
              <img src={img3} alt="person" className="w-[120px]" />
            </div>
          </div>
          <div className="w-96 md:w-[50%] flex flex-col justify-center">
            <p className="text-center md:text-start mb-6 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus pharetra, mollis cras. Luctus pharetra duis nisi,
              fermentum, ipsum et felis odio. Nec semper nunc,s amet f arcu
              interdum Nec semper nunc,s amet f arcu interdum quam.
            </p>
            <p className="text-center md:text-start text-gray-500">
              Egestas amet fermentum aliquam blandit pharetra eleifend. Id duis
              ipsum ac ante. Lectus enim, maecenas adipiscing neque,
              pellentesque nunc ut ipsum. Et adipiscing euismod placerat lacus.
              In sed arcu ullamcorper pharetra, nunc lobortis facilisis cursus
              erat.
            </p>
          </div>
        </div>
      </div>
        <div className="bg-app-color flex w-[90%] md:w-[70%] mt-10 p-5 rounded-xl justify-around">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-white text-4xl">10+</h2>
                <p className="text-white">Courses</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-white text-4xl">30+</h2>
                <p className="text-white">Placements</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-white text-4xl">100%</h2>
                <p className="text-white">Guaranteed</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-white text-4xl">10+</h2>
                <p className="text-white">Courses</p>
            </div>
        </div>
    </div>
  );
};

export default AboutSectionOne;

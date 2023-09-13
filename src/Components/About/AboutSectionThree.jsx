import Arrow from "../../assets/CurleyArrowRight.svg";
import img1 from "../../assets/AboutS31.svg"
import img2 from "../../assets/AboutS32.svg"
import img3 from "../../assets/AboutS33.svg"

const AboutSectionThree = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 mt-8 relative">
      <div className="w-full px-6 mt-8">
        <img src={Arrow} alt="arrow" className="absolute" />
        <h2 className="text-center font-bold text-3xl">
          Embrace a Journey of Learning <br /> Inspire a
          <span className="text-app-color"> Lifetime of Success.</span>
        </h2>
        <p className="text-center mt-5 text-gray-500 text-sm">
          Lorem Ipsum has been the industrys standard dummy text ever since the{" "}
          <br />
          when an unknown printer took a galley of type and scrambled it to make
        </p>
      </div>
      <div className="flex px-20 mt-16 items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <img src={img1} alt="logo" className="bg-app-color p-5 rounded-lg" />
          <h2 className="font-bold text-lg">Innovation</h2>
          <p className="text-center text-gray-500 text-sm">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the when an unknown printer took a galley of type and scrambled it
            to make
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src={img2} alt="logo" className="bg-app-color p-5 rounded-lg" />
          <h2 className="font-bold text-lg">Excellence</h2>
          <p className="text-center text-gray-500 text-sm">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the when an unknown printer took a galley of type and scrambled it
            to make
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src={img3} alt="logo" className="bg-app-color p-5 rounded-lg" />
          <h2 className="font-bold text-lg">Responsibility</h2>
          <p className="text-center text-gray-500 text-sm">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the when an unknown printer took a galley of type and scrambled it
            to make
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionThree;

import { Fade } from "react-reveal";
import CourseCard from "../Components/CourseCard";
import CourseHeader from "../Components/CourseHeader";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import GraphicDesign from "../assets/C1.svg";
import ExpPremium from "../Components/ExpPremium";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Fade bottom> */}
        <Hero />
      {/* </Fade> */}
      <Fade bottom>
        <CourseHeader />
      </Fade>
      <div className="container mb-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
          <CourseCard
            Heading={"Graphic Design"}
            content={"Photoshop,illustrator,indesign"}
            img={GraphicDesign}
          />
        </div>
      </div>
      <ExpPremium />
    </>
  );
};

export default Home;

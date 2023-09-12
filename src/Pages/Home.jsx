import CourseCard from "../Components/CourseCard";
import CourseHeader from "../Components/CourseHeader";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import GraphicDesign from "../assets/C1.svg";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseHeader />
      <div className="container mb-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
          <CourseCard Heading={"Graphic Design"} content={"Photoshop,illustrator,indesign"} img={GraphicDesign} />
        </div>
      </div>
    </>
  );
};

export default Home;

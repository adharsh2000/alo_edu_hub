import { Fade } from "react-reveal";
import CourseCard from "../Components/CourseCard";
import CourseHeader from "../Components/CourseHeader";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ExpPremium from "../Components/ExpPremium";
import { courseCardData } from "../data/courseCardData";
import StudentCardSection from "../Components/StudentCardSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Fade bottom>
        <CourseHeader />
      </Fade>
      <div className="container mb-10 px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
          {courseCardData.map((item) => (
            <CourseCard
              key={item.id}
              Heading={item.courseName}
              content={item.courseDesc}
              img={item.courseImage}
            />
          ))}
        </div>
      </div>
      <ExpPremium />
      <StudentCardSection />
      <Footer />
    </>
  );
};

export default Home;

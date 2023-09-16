import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousal.css";
import StudentCard from "../StudentCard";
import { studentCardData } from "../../data/studentCardData";

const TestiMonials = () => {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials md:pl-4">
      <OwlCarousel
        id="customer-testimonoals"
        className="owl-carousel owl-theme"
        {...options}
      >
        {
          studentCardData.map((item,index) => (
            <StudentCard key={index} name={item.name} img={item.img} position={item.position} desc={item.desc} />
          ))
        }
      </OwlCarousel>
    </section>
  );
};

export default TestiMonials;

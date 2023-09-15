import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousal.css";
import StudentCard from "../StudentCard";

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
    <section id="testimonial" className="testimonials ">
      <OwlCarousel
        id="customer-testimonoals"
        className="owl-carousel owl-theme"
        {...options}
      >
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        {/* <div className="w-48 h-80 bg-orange-700">
            helo
        </div>
        <div className="w-48 h-80 bg-orange-700">
            helo
        </div>
        <div className="w-48 h-80 bg-orange-700">
            helo
        </div>
        <div className="w-48 h-80 bg-orange-700">
            helo
        </div> */}
      </OwlCarousel>
    </section>
  );
};

export default TestiMonials;

// const Carousal = () => {
//   return (
//     <div>Carousal</div>
//   )
// }

// export default Carousal

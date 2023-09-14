import FaqAccordion from "../Components/Faq/FaqAccordian"
import FaqBanner from "../Components/Faq/FaqBanner"
import FaqSectionOne from "../Components/Faq/FaqSectionOne"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { accordions } from "../data/accordian"
import Layout from "./Layout"

const Faq = () => {
  return (
    <Layout>
    <Navbar />
    <FaqBanner />
    <FaqSectionOne />
    <div className="wrapper mt-20 mb-10">
      {/* main content here */}
      <div className="w-[95%] md:w-[700px] mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {/* passing two props to this component */}
              <FaqAccordion question={question} answer={answer}></FaqAccordion>
            </div>
          );
        })}
      </div>
    </div>
    <Footer />
    </Layout>
  )
}

export default Faq
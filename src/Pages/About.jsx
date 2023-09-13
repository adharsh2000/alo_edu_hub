import AboutBanner from "../Components/About/AboutBanner"
import AboutBottomBanner from "../Components/About/AboutBottomBanner"
import AboutSectionOne from "../Components/About/AboutSectionOne"
import AboutSectionThree from "../Components/About/AboutSectionThree"
import AboutSectionTwo from "../Components/About/AboutSectionTwo"
import Navbar from "../Components/Navbar"

const About = () => {
  return (
    <>
        <Navbar />
        <AboutBanner />
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutBottomBanner />
    </>
  )
}

export default About
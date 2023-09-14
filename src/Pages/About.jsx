import AboutBanner from "../Components/About/AboutBanner"
import AboutBottomBanner from "../Components/About/AboutBottomBanner"
import AboutSectionOne from "../Components/About/AboutSectionOne"
import AboutSectionThree from "../Components/About/AboutSectionThree"
import AboutSectionTwo from "../Components/About/AboutSectionTwo"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Layout from "./Layout"

const About = () => {
  return (
    <Layout>
        <Navbar />
        <AboutBanner />
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutBottomBanner />
        <Footer />
    </Layout>
  )
}

export default About
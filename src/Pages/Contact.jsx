import ContactBanner from "../Components/Contact/ContactBanner"
import ContactFormSection from "../Components/Contact/ContactFormSection"
import ContactSectionOne from "../Components/Contact/ContactSectionOne"
import ContactSectionTwo from "../Components/Contact/ContactSectionTwo"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Layout from "./Layout"

const Contact = () => {
  return (
    <Layout>
        <Navbar />
        <ContactBanner />
        <ContactSectionOne />
        <ContactFormSection />
        <ContactSectionTwo />
        <Footer />
    </Layout>
  )
}

export default Contact
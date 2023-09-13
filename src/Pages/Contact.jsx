import ContactBanner from "../Components/Contact/ContactBanner"
import ContactFormSection from "../Components/Contact/ContactFormSection"
import ContactSectionOne from "../Components/Contact/ContactSectionOne"
import ContactSectionTwo from "../Components/Contact/ContactSectionTwo"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <>
        <Navbar />
        <ContactBanner />
        <ContactSectionOne />
        <ContactFormSection />
        <ContactSectionTwo />
        <Footer />
    </>
  )
}

export default Contact
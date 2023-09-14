import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Faq from "./Pages/Faq"
import Contact from "./Pages/Contact"
import JoinForm from "./Pages/JoinForm"
import NotFound from "./Pages/NotFound"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<JoinForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

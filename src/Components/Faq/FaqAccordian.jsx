import { useState } from "react";
import { Fade } from "react-reveal";
/* import react-icons */
import { BiChevronDown } from "react-icons/bi";

/* import framer-motion */
import { motion, AnimatePresence } from "framer-motion";

/* eslint-disable react/prop-types */
const FaqAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="focus:border focus:border-app-color">
      <Fade bottom>

      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-xl font-semibold text-app-color w-80 md:w-[600px]">{question}</h1>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 bg-app-color text-white rounded-full ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="pt-3 text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      </Fade>
    </div>
  );
};

export default FaqAccordion;
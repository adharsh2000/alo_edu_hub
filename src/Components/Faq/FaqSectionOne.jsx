import { useState } from "react";
import Arrow from "../../assets/CurleyArrow.svg";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import axios from "axios";

const FaqSectionOne = () => {
  const [value, setValue] = useState("");
  const url =
    "http://ec2-3-108-250-187.ap-south-1.compute.amazonaws.com:5000/api/email/send";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      return toast.error("Please type something...");
    }
    axios
      .post(url, { summary: value })
      .then(({ data }) => {
        console.log("sender", data);
        toast.success("Form Submitted Successfully..");
      })
      .catch((err) => {
        console.log("Error", err);
        toast.error("Form Submition Faild..");
      });
    setValue("");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10 mb-5 relative">
      <Fade bottom>
        <h2 className="font-bold text-4xl">Ask us anything?</h2>
        <p className="text-gray-500 mb-20 md:mb-0">
          Have any questions? We’re here to assist you.
        </p>
      </Fade>
      <div className="inline-block mt-8">
        <Fade bottom>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="value"
              id=""
              placeholder="Ask something here?"
              className="bg-[#D9D9D9] w-[250px] md:w-96 p-3 outline-none"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button type="submit" className="bg-app-color py-3 px-6 text-white">
              Submit
            </button>
          </form>
        </Fade>
      </div>
      <img
        src={Arrow}
        alt="arrow"
        className="absolute right-1 bottom-5 md:bottom-0 md:right-20"
      />
    </div>
  );
};

export default FaqSectionOne;

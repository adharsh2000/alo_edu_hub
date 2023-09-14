import Map from "../../assets/Map.svg";
import { Fade } from "react-reveal";

const ContactFormSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 justify-evenly">
      <div className="md:w-[40%] ">
        <Fade bottom>
        <form action="" className="flex flex-col gap-2">
          <div className="flex flex-col p-1">
            <label htmlFor="firstname" className="mb-4">
              First Name
            </label>
            <input type="text" className="border-2 border-[#8A8A8A] p-1 outline-none" />
          </div>
          <div className="flex flex-col p-1">
            <label htmlFor="firstname" className="mb-4">
              Last Name
            </label>
            <input type="text" className="border-2 border-[#8A8A8A] p-1 outline-none" />
          </div>
          <div className="flex flex-col p-1">
            <label htmlFor="firstname" className="mb-4">
              E-Mail
            </label>
            <input type="text" className="border-2 border-[#8A8A8A] p-1 outline-none" />
          </div>
          <div className="flex flex-col p-1">
            {/* <input type="text" placeholder="LEAVE A MESSAGE FOR US"  /> */}
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="LEAVE A MESSAGE FOR US"
              className="border-2 border-[#8A8A8A] p-1 outline-none"
            ></textarea>
          </div>
          <div>
            <button className="items-start bg-app-color py-2 m-1 rounded-lg shadow-lg px-9 text-white">Submit</button>
          </div>
        </form>
        </Fade>
      </div>
      <div className="mt-8 md:w-[40%] md:mt-0">
        <Fade bottom>
        <img src={Map} alt="map" />
        </Fade>
      </div>
    </div>
  );
};

export default ContactFormSection;

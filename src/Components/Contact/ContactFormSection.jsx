import Map from "../../assets/Map.svg";

const ContactFormSection = () => {
  return (
    <div className="flex p-10 justify-evenly">
      <div className="w-[40%] ">
        <form action="" className="flex flex-col gap-2">
          <div className="flex flex-col p-1">
            <label htmlFor="firstname" className="mb-4">
              First Name
            </label>
            <input type="text" className="border-2 border-[#8A8A8A]" />
          </div>
          <div className="flex flex-col p-1">
            <label htmlFor="firstname" className="mb-4">
              Last Name
            </label>
            <input type="text" className="border-2 border-[#8A8A8A]" />
          </div>
          <div className="flex flex-col p-1">
            <label htmlFor="firstname" className="mb-4">
              E-Mail
            </label>
            <input type="text" className="border-2 border-[#8A8A8A]" />
          </div>
          <div className="flex flex-col p-1">
            {/* <input type="text" placeholder="LEAVE A MESSAGE FOR US"  /> */}
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="LEAVE A MESSAGE FOR US"
              className="border-2 border-[#8A8A8A]"
            ></textarea>
          </div>
          <div>
            <button className="items-start bg-app-color py-2 m-1 rounded-lg shadow-lg px-9 text-white">Submit</button>
          </div>
        </form>
      </div>
      <div className="w-[40%]">
        <img src={Map} alt="map" />
      </div>
    </div>
  );
};

export default ContactFormSection;

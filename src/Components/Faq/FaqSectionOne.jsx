import Arrow from "../../assets/CurleyArrow.svg";

const FaqSectionOne = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10 mb-5 relative">
      <h2 className="font-bold text-4xl">Ask us anything?</h2>
      <p className="text-gray-500 mb-20 md:mb-0">
        Have any questions? We’re here to assist you.
      </p>
      <div className="inline-block mt-8">
        <input
          type="text"
          name=""
          id=""
          placeholder="Ask something here?"
          className="bg-[#D9D9D9] w-[300px] md:w-96 p-3 outline-none"
        />
        <button className="bg-app-color py-3 px-6 text-white">Submit</button>
      </div>
      <img src={Arrow} alt="arrow" className="absolute right-1 bottom-5 md:bottom-0 md:right-20" />
    </div>
  );
};

export default FaqSectionOne;

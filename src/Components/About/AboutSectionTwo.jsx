import img1 from "../../assets/AboutS21.svg"

const AboutSectionTwo = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 mt-8">
      <div>
        <h2 className="font-bold text-3xl text-center mb-5">Our MIssion</h2>
        <p className="text-gray-500 mx-auto text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
      <div className="w-[80%] flex justify-center gap-10 mt-9 mx-auto">
        <div className="w-[50%] flex flex-col items-center justify-center">
          <p className="text-sm text-start mb-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            cursus pharetra, mollis cras. Luctus pharetra duis nisi, fermentum,
            ipsum et felis odio. Nec semper nunc,s amet f arcu interdum Nec
            semper nunc,s amet f arcu interdum quam.
          </p>
          <p className="text-sm text-start text-gray-500">
            Egestas amet fermentum aliquam blandit pharetra eleifend. Id duis
            ipsum ac ante. Lectus enim, maecenas adipiscing neque, pellentesque
            nunc ut ipsum. Et adipiscing euismod placerat lacus. In sed arcu
            ullamcorper pharetra, nunc lobortis facilisis cursus erat.
          </p>
        </div>
        <div className="flex items-center justify-center">
            <img src={img1} alt="img" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;

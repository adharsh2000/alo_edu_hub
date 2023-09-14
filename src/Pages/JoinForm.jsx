import Logo from "../assets/Logo.svg";

const JoinForm = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <div className="max-w-sm flex flex-col items-center">
        <img src={Logo} alt="logo" className="mb-2" />
        <h2 className="font-bold text-3xl text-center mb-2">
          Join us and kickstart your path to{" "}
          <span className="text-app-color"> excellence.</span>
        </h2>
        <p className="text-gray-500">
          Have any questions? We’re here to assist you.
        </p>
        <form action="" className="p-4 mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Mail Address
            </label>
            <input
              type="text"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4 md:flex">
            <div className="mb-4 md:mr-4">
              <label htmlFor="age" className="block mb-2">
                Age
              </label>
              <input
                type="text"
                id="age"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block mb-2">
                Date Of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="education" className="block mb-2">
              Education Qualification
            </label>
            <input
              type="text"
              id="education"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block mb-2">
              Select Course
            </label>
            <input
              type="text"
              id="course"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-app-color py-2 px-6 text-white rounded-lg">Get Started</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;

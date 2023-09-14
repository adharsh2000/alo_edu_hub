import { useState } from "react";
import Logo from "../assets/Logo.svg";

const JoinForm = () => {
  // Initialize form data state
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    age: "",
    dob: "",
    education: "",
    course: "",
    errors: {
      name: "",
      phone: "",
      email: "",
      age: "",
      dob: "",
      education: "",
      course: "",
    },
  };

  // Use state for form data
  const [formData, setFormData] = useState(initialFormData);

  const validateDateOfBirth = (value) => {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!value.match(dobRegex)) {
      return "Invalid date format (YYYY-MM-DD)";
    }

    // Check if the date is in the past (e.g., not a future date)
    const currentDate = new Date();
    const enteredDate = new Date(value);
    if (enteredDate > currentDate) {
      return "Date of Birth cannot be in the future";
    }

    // Add any additional validation rules here

    return "";
  };

  // Validation function
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (value.trim() === "") {
          return "Name is required";
        }
        return "";
      case "phone":
        if (value.trim() === "" || value.length < 10) {
          return "Phone number is required";
        }
        return "";
      case "email":
        if (!value.match(/^\S+@\S+\.\S+$/)) {
          return "Invalid email address";
        }
        return "";
      case "age":
        if (value.trim() === "") {
          return "Age is required";
        }
        return "";
      case "education":
        if (value.trim() === "") {
          return "Age is required";
        }
        return "";
      case "dob":
        if (fieldName === "dob") {
          return validateDateOfBirth(value);
        }
        return "";
      case "course":
        if (value.trim() === "" || value === "choose") {
          return "course is required";
        }
        return "";
      default:
        return "";
    }
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;

    // Validate and set the field value
    const errorMessage = validateField(fieldName, fieldValue);

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
      errors: {
        ...prevData.errors,
        [fieldName]: errorMessage,
      },
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach((fieldName) => {
      if (fieldName !== "errors") {
        errors[fieldName] = validateField(fieldName, formData[fieldName]);
      }
    });

    // Check if any errors exist
    if (Object.values(errors).some((error) => error !== "")) {
      setFormData((prevData) => ({
        ...prevData,
        errors,
      }));
    } else {
      // Form is valid, you can submit data or perform actions here
      // Reset the form after successful submission
      setFormData(initialFormData);
    }
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="max-w-sm flex flex-col items-center">
        <img src={Logo} alt="logo" className="mb-2" />
        <h2 className="font-bold text-3xl text-center mb-2">
          Join us and kickstart your path to{" "}
          <span className="text-app-color">excellence.</span>
        </h2>
        <p className="text-gray-500">
          Have any questions? We’re here to assist you.
        </p>
        <form action="" className="p-4 mx-auto w-full" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                formData.errors.name ? "border-red-500" : ""
              }`}
              value={formData.name}
              onChange={handleInputChange}
            />
            {formData.errors.name && (
              <p className="text-red-500">{formData.errors.name}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                formData.errors.phone ? "border-red-500" : ""
              }`}
              value={formData.phone}
              onChange={handleInputChange}
            />
            {formData.errors.phone && (
              <p className="text-red-500">{formData.errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                formData.errors.email ? "border-red-500" : ""
              }`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {formData.errors.email && (
              <p className="text-red-500">{formData.errors.email}</p>
            )}
          </div>

          {/* Age and Date of Birth */}
          <div className="mb-4 md:flex">
            <div className="mb-4 md:mr-4">
              <label htmlFor="age" className="block mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                  formData.errors.age ? "border-red-500" : ""
                }`}
                value={formData.age}
                onChange={handleInputChange}
              />
              {formData.errors.age && (
                <p className="text-red-500">{formData.errors.age}</p>
              )}
            </div>
            <div>
              <label htmlFor="dob" className="block mb-2">
                Date Of Birth
              </label>
              <input
                type="date"
                id="dob"
                className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                  formData.errors.dob ? "border-red-500" : ""
                }`}
                value={formData.dob}
                onChange={handleInputChange}
              />
              {formData.errors.dob && (
                <p className="text-red-500">{formData.errors.dob}</p>
              )}
            </div>
          </div>

          {/* Education Qualification */}
          <div className="mb-4">
            <label htmlFor="education" className="block mb-2">
              Education Qualification
            </label>
            <input
              type="text"
              id="education"
              className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                formData.errors.education ? "border-red-500" : ""
              }`}
              value={formData.education}
              onChange={handleInputChange}
            />
            {formData.errors.education && (
              <p className="text-red-500">{formData.errors.education}</p>
            )}
          </div>

          {/* Select Course */}
          <div className="mb-4">
            <label htmlFor="course" className="block mb-2">
              Select Course
            </label>
            <select
              type="text"
              id="course"
              className={`w-full border border-gray-300 rounded-md py-2 px-3 ${
                formData.errors.course ? "border-red-500" : ""
              }`}
              value={formData.course}
              onChange={handleInputChange}
            >
              <option value="choose">choose</option>
              <option value="value 1">value 1</option>
              <option value="value 1">value 2</option>
              <option value="value 1">value 3</option>
            </select>
            {formData.errors.course && (
              <p className="text-red-500">{formData.errors.course}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-app-color py-2 px-6 text-white rounded-lg"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;

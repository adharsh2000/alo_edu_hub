import  { useState } from 'react';
import Map from '../../assets/Map.svg';
import { Fade } from 'react-reveal';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactFormSection = () => {
  // Initialize form data state
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    summary: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      summary: '',
    },
  };

  const url = "http://ec2-3-108-250-187.ap-south-1.compute.amazonaws.com:5000/api/email/send";


  // Use state for form data
  const [formData, setFormData] = useState(initialFormState);

  // Validation function
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'firstName':
        if (value.trim() === '') {
          return 'First name is required';
        }
        return '';
      case 'lastName':
        if (value.trim() === '') {
          return 'Last name is required';
        }
        return '';
      case 'email':
        if (!value.match(/^\S+@\S+\.\S+$/)) {
          return 'Invalid email address';
        }
        return '';
      case 'summary':
        if (value.trim() === '') {
          return 'Summary is required';
        }
        return '';
      default:
        return '';
    }
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
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
      if (fieldName !== 'errors') {
        errors[fieldName] = validateField(fieldName, formData[fieldName]);
      }
    });

    // Check if any errors exist
    if (Object.values(errors).some((error) => error !== '')) {
      setFormData((prevData) => ({
        ...prevData,
        errors,
      }));
    } else {
      // Form is valid, you can submit data or perform actions here
      // Reset the form after successful submission
      const Data = {...formData,type:"AloGroups"}
      console.log(Data);
      axios.post(url,Data)
        .then(({data})=>{
          console.log("sender",data);
          toast.success("Form Submitted Successfully..");
        })
        .catch((err) => {
          console.log('Error', err)
          toast.error('Form Submition Faild..')
        })
      setFormData(initialFormState);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-10 justify-evenly">
      <div className="md:w-[40%] ">
        <Fade bottom>
          <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="flex flex-col p-1">
              <label htmlFor="firstName" className="mb-4">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`border-2 border-[#8A8A8A] p-1 outline-none ${
                  formData.errors.firstName ? 'border-red-500' : ''
                }`}
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {formData.errors.firstName && (
                <p className="text-red-500">{formData.errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col p-1">
              <label htmlFor="lastName" className="mb-4">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`border-2 border-[#8A8A8A] p-1 outline-none ${
                  formData.errors.lastName ? 'border-red-500' : ''
                }`}
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {formData.errors.lastName && (
                <p className="text-red-500">{formData.errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col p-1">
              <label htmlFor="email" className="mb-4">
                E-Mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={`border-2 border-[#8A8A8A] p-1 outline-none ${
                  formData.errors.email ? 'border-red-500' : ''
                }`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {formData.errors.email && (
                <p className="text-red-500">{formData.errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col p-1">
              <label htmlFor="message" className="mb-4">
                Leave a Message
              </label>
              <textarea
                name="summary"
                id="summary"
                cols="30"
                rows="7"
                className={`border-2 border-[#8A8A8A] p-1 outline-none ${
                  formData.errors.summary ? 'border-red-500' : ''
                }`}
                value={formData.summary}
                onChange={handleInputChange}
              ></textarea>
              {formData.errors.summary && (
                <p className="text-red-500">{formData.errors.summary}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button className="items-start bg-app-color py-2 m-1 rounded-lg shadow-lg px-9 text-white">
                Submit
              </button>
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

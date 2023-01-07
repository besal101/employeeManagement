import React from "react";
import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Error from "./Error";
import Success from "./success";

interface FormProps {}

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const AddUserForm = (props: FormProps) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (Object.keys(formData).length === 0) return console.log("No data");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <Success message="Form data submitted successfully" />;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          className="border w-full px-4 py-3 focus:outline-none rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          className="border w-full px-4 py-3 focus:outline-none rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="border w-full px-4 py-3 focus:outline-none rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          id="salary"
          placeholder="Salary"
          className="border w-full px-4 py-3 focus:outline-none rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date of Birth"
          className="border px-5 py-3 focus:outline-none rounded-md"
          onChange={setFormData}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="statusActive"
            value="Active"
            onChange={setFormData}
            className="form-check-input appearance-none rounded-full h-4  w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer"
          />
          <label htmlFor="status" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="statusActive"
            value="In Active"
            onChange={setFormData}
            className="form-check-input appearance-none rounded-full h-4  w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer"
          />
          <label htmlFor="status" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button
        className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
        onClick={handleSubmit}
      >
        Add <BiPlus className="ml-1" size="23" />
      </button>
    </form>
  );
};

export default AddUserForm;

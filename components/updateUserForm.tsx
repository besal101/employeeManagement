import React from "react";
import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Error from "./Error";
import Success from "./success";
import { getUser, updateUser, getUsers } from "../utils/helper";
import { useQuery, useMutation, useQueryClient } from "react-query";

interface FormProps {
  formId: string;
  formData: any;
  setFormData: any;
}

type User = {
  _id?: string;
  name: string;
  email: string;
  salary: number;
  date: string;
  status: string;
  avatar: string;
};

const UpdateUserForm = ({ formId, formData, setFormData }: FormProps) => {
  const { isLoading, isError, data, error, isSuccess } = useQuery<User, Error>(
    ["user", formId],
    () => getUser(formId as any)
  );

  const queryClient = useQueryClient();

  const updateMutation = useMutation((data: any) => updateUser(formId, data), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery("user", getUsers);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <Error message={error.message} />;

  const { name, email, salary, date, status, avatar } = data as User;

  const [firstname, lastname] = name ? name.split(" ") : formData;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });

    await updateMutation.mutateAsync(updated);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onClick={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          className="border w-full px-4 py-3 focus:outline-none rounded-md"
          onChange={setFormData}
          defaultValue={firstname}
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
          defaultValue={lastname}
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
          defaultValue={email}
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
          defaultValue={salary}
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
          defaultValue={date}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            id="statusActive"
            value="Active"
            defaultChecked={status === "Active"}
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
            defaultChecked={status === "Inactive"}
            onChange={setFormData}
            className="form-check-input appearance-none rounded-full h-4  w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer"
          />
          <label htmlFor="status" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button
        className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500"
        type="submit"
      >
        Update <BiBrush className="ml-1" size="23" />
      </button>
    </form>
  );
};

export default UpdateUserForm;

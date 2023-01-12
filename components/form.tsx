import React, { useReducer } from "react";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useAppSelector } from "../redux/hooks";
import { getFormState, getFormId } from "../redux/reducer";

type Props = {
  TYPE: string;
};

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const form = ({ TYPE }: Props) => {
  const formId = useAppSelector(getFormId);
  const [formData, setFormData] = useReducer(formReducer, {});

  return (
    <div className="container mx-auto py-5">
      {TYPE === "ADDFORM"
        ? AddUserForm({ formData, setFormData })
        : UpdateUserForm({ formId, formData, setFormData })}
    </div>
  );
};

export default form;

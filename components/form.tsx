import React from "react";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";

type Props = {};

const form = (props: Props) => {
  const flag = false;

  return (
    <div className="container mx-auto py-5">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
};

export default form;

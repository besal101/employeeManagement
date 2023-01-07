import React from "react";
import { BiCheck } from "react-icons/bi";

type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return (
    <div className="Error container mx-auto">
      <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message}
        <BiCheck size={25} color={"rgb(284,113,113)"} />
      </div>
    </div>
  );
};

export default Error;

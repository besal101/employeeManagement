import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

interface TableProps {}

const Table = (props: TableProps) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200 font-medium">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200 font-medium">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200 font-medium">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200 font-medium">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200 font-medium">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200 font-medium">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-50 text-center">
          <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" alt="avatar" className="w-10 h-10 rounded-full mr-4" />
            <span className="text-center ml-2 font-semibold">
              Bishal Khatri
            </span>
          </td>
          <td className="px-16 py-2">
            <span>hello@bishalkhatri.com</span>
          </td>
          <td className="px-16 py-2">
            <span>$2000</span>
          </td>
          <td className="px-16 py-2">
            <span>10-05-2022</span>
          </td>
          <td className="px-16 py-2">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-16 py-2 flex justify-center gap-2">
            <button className="cursor">
              <BiEdit size={25} color={"rgba(34,197,94)"} />
            </button>
            <button className="cursor">
              <BiTrashAlt size={25} color={"rgba(244,63,94)"} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

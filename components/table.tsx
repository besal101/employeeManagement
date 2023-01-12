import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "../utils/helper";
import { useQuery } from "react-query";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { toggleChange, updateAction, deleteAction } from "../redux/reducer";

interface TableProps {
  _id?: string;
  name: string;
  email: string;
  salary: number;
  date: string;
  status: string;
  avatar: string;
}

interface Props {
  children?: React.ReactNode | any;
}

const TableData = ({
  name,
  email,
  salary,
  date,
  status,
  avatar,
  _id,
}: TableProps) => {
  const dispatch = useAppDispatch();

  const onUpdate = (_id: any) => (event: any) => {
    dispatch(updateAction({ formId: _id }));
    dispatch(toggleChange({ toggleForm: "UPDATEFORM" }));
  };

  const onDelete = (_id: any) => (event: any) => {
    dispatch(deleteAction({ deleteId: _id }));
  };

  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="text-center ml-2 font-semibold">{name}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email}</span>
      </td>
      <td className="px-16 py-2">
        <span>${salary}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-500 " : "bg-rose-500 "
            }text-white px-5 py-1 rounded-full`}
          >
            {status}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-center gap-2">
        <button className="cursor" onClick={onUpdate(_id)}>
          <BiEdit size={25} color={"rgba(34,197,94)"} />
        </button>
        <button className="cursor" onClick={onDelete(_id)}>
          <BiTrashAlt size={25} color={"rgba(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
};

const Table = () => {
  const { data, isLoading, error, isError } = useQuery("user", getUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError)
    return (
      <>
        <div>Got Error {error as any}</div>
      </>
    );
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
            <span className="text-gray-200 font-medium">Join Date</span>
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
        {data.map((item: TableProps) => (
          <TableData
            key={item._id}
            _id={item._id}
            name={item.name}
            email={item.email}
            salary={item.salary}
            date={item.date}
            status={item.status}
            avatar={item.avatar}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import { useState } from "react";
import { BiUserPlus, BiX, BiCheck } from "react-icons/bi";
import Form from "../components/form";
import Table from "../components/table";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  toggleChange,
  getFormState,
  getDeleteId,
  deleteAction,
} from "../redux/reducer";
import { useQueryClient } from "react-query";
import { deleteUser, getUsers } from "../utils/helper";

export default function Home() {
  const value = useAppSelector(getFormState);
  const deleteId = useAppSelector(getDeleteId);
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const handler = () => {
    dispatch(toggleChange({ toggleForm: "ADDFORM" }));
  };

  const closeForm = () => {
    dispatch(toggleChange({ toggleForm: false }));
  };

  const deleteHandler = async () => {
    if (deleteId !== null) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery("user", getUsers);
      dispatch(deleteAction({ deleteId: null }));
    }
  };

  const cancelHandler = () => {
    console.log("Cancel");
  };

  const DeleteComponent = ({
    deleteHandler,
    cancelHandler,
  }: {
    deleteHandler: any;
    cancelHandler: any;
  }) => {
    return (
      <div className="flex gap-5">
        <p>Are You Sure ?</p>
        <button
          onClick={deleteHandler}
          className="flex bg-red-400 px-4 py-2 rounded-md text-white border hover:bg-rose-500 hover:border-red-500"
        >
          Yes <BiCheck className="ml-1" size="23" />
        </button>
        <button
          onClick={cancelHandler}
          className="flex bg-green-400 px-4 py-2 rounded-md text-white border hover:bg-gray-500 hover:border-gray-500"
        >
          No
          <BiX className="ml-1" size="23" />
        </button>
      </div>
    );
  };

  return (
    <main className="py-5">
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Employee Management
      </h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        {value === false ? (
          <div className="left flex gap-5">
            <button
              className="flex bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400 hover:border-indigo-500 hover:text-gray-800"
              onClick={handler}
            >
              Add Employee <BiUserPlus className="ml-2" size="23" />
            </button>
          </div>
        ) : (
          <>
            <div className="left flex gap-5">
              <button
                className="flex bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-red-300 hover:border-indigo-500 hover:text-gray-800"
                onClick={closeForm}
              >
                Return <BiX className="ml-2" size="23" />
              </button>
            </div>
          </>
        )}
        {
          // Delete Component
          deleteId !== null ? (
            <DeleteComponent
              deleteHandler={deleteHandler}
              cancelHandler={cancelHandler}
            />
          ) : (
            <></>
          )
        }
      </div>

      {/* Form */}
      <div className="container mx-auto py-5">
        {value !== false ? <Form TYPE={value} /> : <></>}
      </div>

      {/* Table */}
      <div className="container mx-auto">
        <Table />
      </div>
    </main>
  );
}

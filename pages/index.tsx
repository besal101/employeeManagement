import { BiUserPlus } from "react-icons/bi";
import Form from "../components/form";
import Table from "../components/table";

export default function Home() {
  return (
    <main className="py-5">
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Employee Management
      </h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-5">
          <button className="flex bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400 hover:border-indigo-500 hover:text-gray-800">
            Add Employee <BiUserPlus className="ml-2" size="23" />
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto py-5">
        <Form />
      </div>

      {/* Table */}
      <div className="container mx-auto">
        <Table />
      </div>
    </main>
  );
}

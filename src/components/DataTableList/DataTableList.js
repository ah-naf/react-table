import React from "react";
import data from "../../data.json";
import DataTable from "../DataTable/DataTable";

export default function DataTableList() {
  return (
    <div className="bg-white border-2 rounded-md shadow-md items-start space-y-3">
      <div className="p-4 pb-2">
        <div className="bg-gray-100 rounded-md flex w-full items-center space-x-2 p-2 md:w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-sm text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="border-0 outline-none rounded-md bg-transparent"
            placeholder="Search"
          />
        </div>
      </div>
      <table className="table-auto w-full">
        {data.map((item, index) => (
          <DataTable key={index} data={item} />
        ))}
      </table>
      <div className="flex p-4 py-2 xl:px-8">
        <div className="flex-grow hidden md:inline-flex">
          <select className="p-2 text-[#3E3F48] bg-transparent outline-none border-2 border-gray-400 rounded-sm" name="" id="">
            <option value="">10 items per page</option>
          </select>
        </div>
        <div className="flex-grow space-x-4 flex justify-start items-center md:justify-end">
          <select className="p-2 text-[#3E3F48] bg-transparent outline-none border-2 border-gray-400 rounded-sm" name="" id="">
            <option value="">Page 1 of 5</option>
          </select>
          <button className="border-2 rounded-md border-gray-400 p-2 px-3">
            <img src="/btn1.svg" alt="" />
          </button>
          <button className="border-2 border-gray-400 rounded-md p-2 px-3">
            <img src="/btn2.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import DataTableList from "../DataTableList/DataTableList";

const Homepage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const url = "data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);
  return (
    <div className="flex  flex-col-reverse sm:flex-row">
      <div className="flex sm:inline-flex">
        <div className="flex justify-between items-center w-full bg-white p-2 sm:p-6 px-4 lg:px-7 space-y-1 sm:bg-transparent sm:flex-col sm:justify-start relative before:absolute before:w-full before:h-1 before:bg-black before:opacity-10 before:top-0 before:left-0 sm:before:opacity-0">
          <div className="flex items-center space-x-2 p-3">
            <img src="/1.svg" alt="" />
            <h3 className="text-gray-700 hidden md:flex">Dashboard</h3>
          </div>
          <div className="flex items-center space-x-2 bg-white p-3 rounded-md sm:shadow-md">
            <img src="/2.svg" alt="" />
            <h3 className="text-green-500 hidden font-medium md:flex">
              Inventory
            </h3>
          </div>
          <div className="flex items-center space-x-2 p-3">
            <img src="/3.svg" alt="" />
            <h3 className="text-gray-700 hidden md:flex">Documents</h3>
          </div>
          <div className="flex items-center space-x-2 p-3">
            <img src="/4.svg" alt="" />
            <h3 className="text-gray-700 hidden md:flex">Settings</h3>
          </div>
        </div>
      </div>
      <div className="flex-grow border-2 border-b-0 mb-6">
        <h2 className="text-2xl p-6 pb-4 font-medium text-gray-800">
          Inventory
        </h2>
        <div className="p-5 border-2 border-b-0">
          <DataTableList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
// {/* <tr className="bg-[#FDF4ED]">
//           <td className="hidden md:inline-flex px-2 py-3 text-sm items-center justify-start">
//             <input className="h-4 w-4" type="checkbox" name="" id="" />
//           </td>
//           <td className="hidden md:inline-flex p-2 py-3 text-sm">
//             <div className="inline-flex items-center justify-start space-x-1">
//               <p>Date Updated</p>
//               <img src="/5.svg" alt="" />
//             </div>
//           </td>
//           <td className="p-2 py-3 text-sm">
//             <div className="inline-flex items-center justify-start space-x-1">
//               <p>Title</p>
//               <img src="/6.svg" alt="" />
//             </div>
//           </td>
//           <td className="hidden xl:inline-flex p-2 py-3 text-sm">Details</td>
//           <td className="hidden lg:inline-flex p-2 py-3 text-sm">Status</td>
//           <td className="p-2 py-3 text-sm">
//             <p className="hidden xl:inline-flex">Quantity</p>
//             {/* <p className="flex xl:hidden">{" "}</p> */}
//           </td>
//           <td className="hidden xl:inline-flex p-2 py-3 text-sm">Unit Price</td>
//           <td className="p-2 py-3 text-sm">
//             <div className="inline-flex items-center justify-start space-x-1">
//               <p>Amount</p>
//               <img src="/6.svg" alt="" />
//             </div>
//           </td>
//         </tr> */}
const DataTable = ({ data }) => {
  if (data.id === "0") {
    return (
      <thead className="border-b-2">
        <tr>
          <td className="hidden md:inline-flex px-2 py-5 text-sm text-[#3E3F48] items-center justify-start text-center md:text-left">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td className="hidden lg:inline-flex text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p>Date Updated</p>
              <img src="/5.svg" alt="" />
            </div>
          </td>
          <td className="text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p>Title</p>
              <img src="/6.svg" alt="" />
            </div>
          </td>
          <td className="hidden xl:inline-flex text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            Details
          </td>
          <td className="opacity-0 md:opacity-100 text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">Status
          </td>
          <td className="text-sm text-[#3E3F48] px-2 py-5">
            <span className="hidden xl:inline-flex text-center md:text-left">Qunatity</span>
          </td>
          <td className="hidden xl:inline-flex text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            Unit Price
          </td>
          <td className="text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p>Amount</p>
              <img src="/6.svg" alt="" />
            </div>
          </td>
        </tr>
      </thead>
    );
  }
  return (
    <tbody>
      <tr>
        <td className="hidden md:inline-flex px-2 text-center md:text-left py-5 text-sm text-[#3E3F48] items-center justify-start ">
          <input className="h-4 w-4" type="checkbox" name="" id="" />
        </td>
        <td className="hidden lg:inline-flex text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">
          {data.dateUpdated}
        </td>
        <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">{data.title}</td>
        <td className="hidden xl:inline-flex text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">
          {data.details}
        </td>
        <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <p className="hidden lg:inline-flex">{data.status}</p>
            <div
              className={`h-2 rounded-full w-2 ${
                data.circle === "red"
                  ? "bg-[#F52828]"
                  : data.circle === "green"
                  ? "bg-[#44C776]"
                  : "bg-[#F58A28]"
              }`}
            ></div>
          </div>
        </td>
        <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">{data.quantity}</td>
        <td className="hidden xl:inline-flex text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">
          {data.unitPrice}
        </td>
        <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">{data.amount}</td>
      </tr>
    </tbody>
  );
};

export default DataTable;

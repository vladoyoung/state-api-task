import React, { useState, useEffect } from "react";
import { fetchDataFromAPI } from "../services/api";

// To use this during the load state
function LoadingTableTableRows({defaultRows = 10}) {
    return (
        [...Array(defaultRows)].map((x, index) =>
            <tr key={index} className="even:bg-gray-50 animate-pulse">
                <td className="whitespace-nowrap py-5 pl-4 pr-3">
                    <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                            <div className="h-11 w-11 rounded-full object-cover bg-gray-100"/>
                        </div>
                        <div className="ml-4">
                            <div className="bg-gray-100 w-20 h-3 rounded-md"></div>
                            <div className="mt-1 bg-gray-100 w-32 h-3 rounded-md"></div>
                        </div>
                    </div>
                </td>
                <td className="px-3 py-5">
                    <div className="bg-gray-100 w-28 h-3 rounded-md"></div>
                    <div className="mt-1 bg-gray-100 w-36 h-3 rounded-md"></div>
                </td>
                <td className="px-3 py-5">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-gray-100 ring-gray-200 h-5 w-14`}></span>
                </td>
                <td className="px-3 py-5">
                    <div className="bg-gray-100 w-36 h-3 rounded-md"></div>
                    <div className="mt-1 bg-gray-100 w-52 h-3 rounded-md"></div>
                </td>
            </tr>
        )
    )
}

const DataTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataFromAPI();
      setIsLoading(false)
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-12 w-full">
        <p>Below data enerated from <a href="https://json-generator.com/" target="_blank" rel="noreferrer" className="text-indigo-700 underline">https://json-generator.com/</a></p>
        <div className="flow-root w-full">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle relative">
                    {isLoading && <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white"></div>}
                    <table className="min-w-full divide-y divide-gray-300 table-auto">
                        <thead>
                            <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Finances</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white ">
                            {/* Loading state */}
                            {isLoading && <LoadingTableTableRows/>}
                            {data.map((item) => (
                                <tr key={item._id} className="even:bg-gray-50">
                                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-11 w-11 flex-shrink-0">
                                                <img className="h-11 w-11 rounded-full object-cover" src={item.picture} alt={`Profile of ${item.name}`}/>
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium text-gray-900">{item.name}</div>
                                                <div className="mt-1 text-gray-500">{item.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <div className="text-gray-900">Balance: {item.balance}</div>
                                        <div className="mt-1 text-gray-500">Company: {item.company}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${item.isActive ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-red-50 text-red-700 ring-red-600/20'}`}>{item.isActive ? 'Active' : 'Inactive'}</span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <div className="text-gray-900">Phone: {item.phone}</div>
                                        <div className="mt-1 text-gray-500">Address: {item.address}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DataTable;

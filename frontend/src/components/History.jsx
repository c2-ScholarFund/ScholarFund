import React, { useState } from "react";

function Inputs() {
    // const [choose, setChoose] = useState(false);
    // const [type, setType] = useState(false);
    return (
        <>
            <div className="w-full sm:px-6">
                {/* <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">

                </div> */}
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">


                        <thead className="bg-gray-100">
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-7">
                                    <div className="relative">
                                        <div className=" dark:bg-gray-800 flex center  w-40" >
                                            <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">Eligibility Criteria</p>
                                        </div>

                                    </div>
                                </th>

                                <th className="font-normal text-left pl-7">
                                    <div className="relative">
                                        <div className="dark:bg-gray-800 flex center  w-40" >
                                            <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">Scholarship Type</p>
                                        </div>
                                    </div>
                                </th>

                                <th className="font-normal text-left pl-7">
                                    <div className="relative">
                                        <div className="dark:bg-gray-800 flex center  w-40" >
                                            <p className="px-9 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">Budget</p>
                                        </div>
                                    </div>
                                </th>

                                <th className="font-normal text-left pl-7">
                                    <div className="relative">
                                        <div className="dark:bg-gray-800 flex center  w-40" >
                                            <p className="px-9 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">Duration</p>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        </thead>


                        <tbody className="w-full">

                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">

                                        <div className="pl-4">
                                            <p className="font-medium">Citizenship</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">School Students</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-6 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">Bi-Annually</p>
                                </td>

                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">

                                        <div className="pl-4">
                                            <p className="font-medium">GPA 4.0</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">University Students</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-6 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                {/* <td className="pl-12">
                                    <p className="font-medium">09/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td> */}
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">Bi-Annually</p>
                                </td>

                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">

                                        <div className="pl-4">
                                            <p className="font-medium">Citizenship</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">Research Students</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-6 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                {/* <td className="pl-12">
                                    <p className="font-medium">09/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td> */}
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">Bi-Annually</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center ">
                <button
                    className="bg-red-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Go To Fund
                </button>
            </div>
        </>
    );
}

export default Inputs;

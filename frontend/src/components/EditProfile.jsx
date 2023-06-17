import React from 'react'
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    return (
        <>
            <div className="flex items-center justify-center" >
                <div class="xl:w-10/12 w-full px-8">
                    <div class="bg-blue-800 py-12 flex flex-wrap items-center justify-center shadow">
                        <button className="w-52 h-16 relative md:mt-0 mt-4" onClick={handleClick}>
                            <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" className="w-full h-full" />
                            <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p className="w-full text-sm font-large leading-4 text-white">Back To Profile</p>
                            </div>
                        </button>
                        <div class="w-52 h-16 relative md:mt-0 mt-4">
                            <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" class="w-full h-full" />
                            <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p class="w-full text-sm font-large leading-4 text-indigo-800">Edit Your Information</p>
                            </div>
                        </div>
                    </div>
                    <div class="xl:px-24">
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="" />
                                    </div>
                                </div>
                                <div class="md:flex items-center lg:ml-24 mt-8">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                        <input type="email" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-16 lg:flex justify-between border-gray-200 pb-16">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Security</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="password">Password</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="Enter your password" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="securityCode">Security Code</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode" placeholder="Enter your security code" />
                                    </div>
                                </div>
                                <div class="md:flex items-center lg:ml-24 mt-8">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="recoverEmail">Recovery Email address</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="recoveryEmail" placeholder="Your recovery email" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="altPhone">Alternate phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="altPhone" placeholder="Your alternate phone number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center border-b ">
                            <button
                                className="bg-red-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-5 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Save Edits
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile
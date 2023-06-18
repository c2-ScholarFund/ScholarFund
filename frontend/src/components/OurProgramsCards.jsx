import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import programsData from "../assets/programsData.json"


const OurProgramsCards = () => {

    return (
        <>

            <div className="py-12 min-h-screen flex dark:from-gray-900 bg-gradient-to-b from-white to-blue-50">
                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="mb-12 space-y-2 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
                            Our Programs                        </h2>
                        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                            Education for All: Navigate our Program's Website and Embark on a Journey of Learning
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {programsData.map((program) => (
                            <div
                                key={program.id}
                                className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={program.image}
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                    />

                                </div>
                                <div className="mt-6 relative">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                        {program.title}
                                    </h3>
                                    <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                        {program.description}
                                    </p>
                                    <Link
                                        to={`/programDetails/${program.id}`}
                                        className="inline-block flex items-center"
                                    >
                                        <span className="text-primary font-semibold hover:text-blue-700">Read more</span>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="ml-1 text-blue-700 dark:text-blue-400"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-6 relative">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    International Healthcare Management
                                </h3>
                                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                    Empowering Global Health Leaders for a Sustainable Future...
                                </p>
                                <a className="inline-block flex items-center" href="#">
                                    <span className="text-primary">Read more</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-blue-700 dark:text-blue-400" />
                                </a>
                            </div>
                        </div>
                        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-6 relative">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    Engineering Management
                                </h3>
                                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                    Engineering Management: Bridging Innovation and Leadership for a Dynamic Future...
                                </p>
                                <a className="inline-block flex items-center" href="#">
                                    <span className="text-primary">Read more</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-blue-700 dark:text-blue-400" />
                                </a>
                            </div>
                        </div>
                        <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-6 relative">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    Computer Science
                                </h3>
                                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                    Unleash the Power of Algorithms and Innovation...
                                </p>
                                <a className="inline-block flex items-center" href="#">
                                    <span className="text-primary">Read more</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-blue-700 dark:text-blue-400" />
                                </a>
                            </div>
                        </div> */}
                </div>
            </div>

        </>
    )
}

export default OurProgramsCards
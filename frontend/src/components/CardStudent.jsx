import { useState } from "react";
import { Progress } from "@material-tailwind/react";

export default function CardStudent() {
  
  const [raised, setRaised] = useState(5000);
  const [goal, setGoal] = useState(10000);

  return (
    <div>
      <div className="w-80  mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg h-60"
            src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/zach-vessels-wxrd7byfxs4-unsplash.jpg"
            alt=""
          />
        </a>
        <div className="flex w-full flex-col gap-4 p-3">
          <Progress
            value={(raised / goal) * 100}
            size="lg"
            label="."
            color="red"
          />
        </div>
        <div className="flex justify-between">
          <small className="text-gray-600 ms-5">Raised :{raised}$ </small>
          <small className="text-gray-600 me-5">Goal :{goal}$ </small>
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Amro Alkhazaleh
          </h5>
          <hr />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            World’s health care system is neither healthy, caring, nor a system
          </p>
          <div className="flex justify-between">
            <a
              href="#"
              className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Progress } from "@material-tailwind/react";
import axios from "axios";

export default function CardStudent() {
  
  const [raised, setRaised] = useState(5000);
  const [goal, setGoal] = useState(10000);
  const [Problems, setProblems] = useState();

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:3100/prob/getproblem")
      .then(response => {setProblems(response.data)
        console.log(Problems)})
      
      
    } catch (error) {
      console.error("An error occurred while fetching problems", error);
      // Handle error state or display error message
    }
  };

  return (
    <div className="flex flex-wrap justify-center px-40">
      {Problems?.map(problem=>(
                      <div className="w-80 mx-10 mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img
                          className="rounded-t-lg h-60"
                          src={problem.images[0]}
                          alt=""
                        />
                      </a>
                      <div className="flex w-full flex-col gap-4 p-3">
                        <Progress
                          value={Math.ceil((problem?.raised / problem?.amount) * 100)}
                          size="lg"
                          label="."
                          color="red"
                        />
                      </div>
                      <div className="flex justify-between">
                        <small className="text-gray-600 ms-5">Raised :{problem?.raised}$ </small>
                        <small className="text-gray-600 me-5">Goal :{problem?.amount}$ </small>
                      </div>
              
                      <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {problem?.fullname}
                        </h5>
                        <hr />
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {problem?.problemDescription}
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

      ))}

    </div>
  );
}

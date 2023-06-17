import { useState, useEffect } from "react";
import axios from "axios";

export default function Cardprob() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:3100/prob/getproblem");
      setProblems(response.data);
    } catch (error) {
      console.error("An error occurred while fetching problems", error);
      // Handle error state or display error message
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <h1>Problem List</h1>
      {problems.length > 0 ? (
        <ul>
          {problems.map((problem) => (
            <li key={problem._id}>
              <h2>{problem.fullname}</h2>
              <p>Email: {problem.email}</p>
              <p>Phone Number: {problem.phoneNumber}</p>
              <p>Date of Birth: {formatDate(problem.dateOfBirth)}</p>
              <p>City: {problem.city}</p>
              <p>GPA: {problem.gpa}</p>
              <p>Program: {problem.program}</p>
              <p>Problem Description: {problem.problemDescription}</p>
              {problem.images && problem.images.length > 0 && (
                <div>
                  <h3>Images:</h3>
                  <ul>
                    {problem.images.map((image, index) => (
                      <li key={index}>
                        <img src={image} alt={`Image ${index}`} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No problems found.</p>
      )}
    </div>
  );
}

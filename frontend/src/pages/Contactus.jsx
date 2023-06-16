import  { useState } from "react";
import axios from "axios";


export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    axios
      .post("/send-email", formData)
      .then((response) => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div
      className="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')",
        backgroundSize: "cover",
      }}
    >
      <div className="md:px-20 px-4 py-8">
        <div className="flex items-center justify-between"></div>
      </div>
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Let’s chat and get a quote!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Name
                </label>
                <input
                  tabIndex={0}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-900"
                  placeholder="Name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-900"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8"></div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 mt-4">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

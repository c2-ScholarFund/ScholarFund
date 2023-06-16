import  { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:3100/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
    
        if (response.ok) {
          const data = await response.json();
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          // Handle the response data as needed
          console.log(data);
        } else {
          // Handle the error case
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* url('/img/hero-pattern.svg') */}
      <div className="flex min-h-screen bg-white">
        <div
          className="w-1/2 bg-cover md:block hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)"
          }}
        />
        {/* <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
      <img src="log_in.webp" alt="hey">
  </div> */}
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className=" text-gray-800 text-3xl font-medium">
              Create an account for free
            </h1>
            <br />
            <h1 className="text-gray-800 text-2xl font-medium text-center">
              Choose a type of account
            </h1>
            <div className="flex justify-center mt-5">
              <label htmlFor="donor" className="mr-4">
                <input
                  type="radio"
                  id="donor"
                  name="role"
                  value="donor"
                  checked={formData.role === "donor"}
                  onChange={handleChange}
                />
                Donor
              </label>
              <label htmlFor="student">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={formData.role === "student"}
                  onChange={handleChange}
                />
                Student
              </label>
            </div>
          </div>
          <form action="#" className="p-0" onSubmit={handleSubmit}>
            <div className="mt-5">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="First Name"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Last Name"
              />
            </div>
            <div className="mt-5">
              {/* <label for="email" class="sc-bqyKva ePvcBv">Email</label> */}
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Username"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Password"
              />
            </div>
            <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
              <input
                type="checkbox"
                className="inline-block border-0"
              />
              <span display="inline" className="">
                By creating an account you are agreeing to our
                <a
                  className=""
                  href="/s/terms"
                  target="_blank"
                  data-test="Link"
                >
                  <span className="underline ">Terms and Conditions</span>{" "}
                </a>{" "}
                and
                <a
                  className=""
                  href="/s/privacy"
                  target="_blank"
                  data-test="Link"
                >
                  <span className="underline">  Privacy Policy</span>{" "}
                </a>
              </span>
            </div>
            <div className="mt-10">
              <input 
                type="Sign Up"
                defaultValue="Sign up"
                className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600 text-center"
              />
            </div>
          </form>
          <a className="" href="/login" data-test="Link">
            <span className="block  p-5 text-center text-gray-800  text-xs ">
              Already have an account? Login
            </span>
          </a>
        </div>
      </div>

    </>
  );
}

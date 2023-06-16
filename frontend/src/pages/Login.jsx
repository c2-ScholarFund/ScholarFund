import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3100/login", {
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
        // Handle the successful login
        console.log("Login successful");
      } else {
        // Handle the error case
        console.error("Login failed");
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
              "url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)",
          }}
        />
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-gray-800 text-3xl font-medium text-center">
              Welcome Back.
            </h1>
          </div>
          <br></br>
          <form action="#" className="p-0" onSubmit={handleSubmit}>
            <div className="mt-5">
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Password"
              />
            </div>
            <div className="mt-10">
              <input
                type="submit"
                value="Login"
                className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600 text-center"
              />
            </div>
          </form>
          <a className="" href="/SignUp" data-test="Link">
            <span className="block  p-5 text-center text-gray-800  text-xs">
              Don &#39;t have an account? SignUp
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

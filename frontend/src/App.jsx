import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error10 from "./pages/Error10 ";
import Home from "./pages/Home";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import DonarProfile from "./pages/DonarProfile";
import Studants from "./pages/Studants";
import Programs from "./pages/Programs";


function App() {
    const currentPath = window.location.pathname;

  return (
    // testing
    <BrowserRouter>
      {currentPath !== "/DonarProfile" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="sginup" element={<SignUp />} />
        <Route path="Studant" element={<Studants />} />

        <Route path="contactus" element={<Contactus />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="DonarProfile" element={<DonarProfile />} />
        <Route path="ourPrograms" element={<Programs />} />
        <Route path="*" element={<Error10 />} />
          
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

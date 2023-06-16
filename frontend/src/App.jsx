import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error10 from "./pages/Error10 ";
import Home from "./pages/Home";
import CardStudent from "./components/CardStudent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import DonarProfile from "./pages/DonarProfile";


function App() {
  return (
    // testing
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sginup" element={<SignUp />} />
        <Route path="Studant" element={<CardStudent />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="DonarProfile" element={<DonarProfile />} />
        <Route path="*" element={<Error10 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error10 from "./pages/Error10 ";
import Home from "./pages/Home";
import CardStudent from "./components/CardStudent";
import EditProfile from "./components/EditProfile";
import Component from "./pages/DonarProfile";


function App() {
  return (
       // testing
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error10/>} />
      <Route path="Studant" element={<CardStudent/>} />
      <Route path="edit" element={<EditProfile/>} />
      <Route path="profile" element={<Component/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;

import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/main";
import Signup from "./components/Singup/Signup";
import Login from "./components/Login/Login";
import About from "./components/About/About.js";
import Contacts from "./components/Contactus/Contactus";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MediaGallary from "./components/MediaGallary/Mediagallary";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exect element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/" element={<Home />} />
        <Route path="/media-gallery" element={<MediaGallary />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;

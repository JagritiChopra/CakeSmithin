import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import OurStory from "./Pages/OurStory";
import CheckOut from "./Pages/Checkout.jsx";
import "./index.css";
import JoinUs from "./Pages/JoinUs";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="menu" element={<Menu />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="join-us" element={<JoinUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

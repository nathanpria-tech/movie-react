import React from "react";
import Navbar from "./component/NavBar";
import Home from "./pages/Home";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col justify-between">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

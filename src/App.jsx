import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <>
      <nav className="font-serif">
        <Navbar />
      </nav>
      <main
        className="w-full bg-zinc-100 relative overflow-x-hidden font-serif" 
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

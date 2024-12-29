import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {

//   const [theme, setTheme] = useState(false);
//   const [repeat, setRepeat] = useState(0);

//  const themeHandler =  () => {
//     setTheme(!theme);
//     setRepeat(!repeat);
//   };

  return (
    <>
      <nav className="font-serif">
        <Navbar />
      </nav>
      <main
        className="w-full relative overflow-x-hidden font-serif" 
      >
        <Outlet />
      </main>
    </>
  );
};

export default App;

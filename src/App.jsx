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
      <nav className="font-mono">
        <Navbar />
      </nav>
      <main
        className="w-full relative font-mono mt-20" 
      >
        <Outlet />
      </main>
    </>
  );
};

export default App;

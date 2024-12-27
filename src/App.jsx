import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <main className="bg-black w-full h-[500px] text-white">
        <Outlet />
      </main>
    </>
  );
};

export default App;

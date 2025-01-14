import React, { useEffect, Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <div className="flex flex-col min-h-screen">
      <nav className="font-serif sticky top-0 z-50 bg-zinc-100">
        <Navbar />
      </nav>


      <main className="flex-grow w-full bg-zinc-100 relative overflow-x-hidden font-serif">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;

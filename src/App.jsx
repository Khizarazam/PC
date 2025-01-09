import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className="font-serif">
        <Navbar />
      </nav>
      <main className="w-full bg-zinc-100 relative overflow-x-hidden font-serif">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

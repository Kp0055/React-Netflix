import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } flex items-center justify-between p-4 text-red-600 h-16 overflow-hidden z-50` }
    >
      <div className="flex items-center space-x-4">
        <Link to='/'><h1 className="text-2xl font-bold tracking-widest">NETFLIX</h1></Link>
        <div className="NavLinks flex space-x-4 overflow-x-auto">
          {/* Add your nav links here */}
        </div>
      </div>
      <div className="flex items-end text-white">
        <h2>profile</h2>
      </div>
    </div>
  );
}



export default Navbar;


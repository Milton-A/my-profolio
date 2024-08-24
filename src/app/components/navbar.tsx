import React from "react";
import { ArrowRight } from "lucide-react";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-16 py-3 border-b-2 ">
      <h1 className="font-bold text-2xl">
        Milton <span className="text-gray-400">Dantas</span>
      </h1>
      <ul className="flex justify-around items-center gap-8 px-4 py-2 ">
        <li className="text-base">Home</li>
        <li className="text-base">About</li>
        <li className="text-base">Services</li>
        <li className="text-base">Contact</li>
      </ul>
      <button className="flex gap-2 border px-4 py-2 rounded-3xl border-gray-400">
        {"Let's Talk"} <ArrowRight />
      </button>
    </nav>
  );
};

export default Navbar;

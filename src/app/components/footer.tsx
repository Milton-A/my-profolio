import { ArrowRight } from "lucide-react";
import React from "react";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full justify-center  items-center gap-10 p-6 bg-gradient-to-r from-rose-100 to-teal-100">
      <h1 className="text-5xl w-1/2 text-center">
        Have a project in mind? {"Let's get to work"}
      </h1>
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-indigo-400 to-cyan-500 px-5 py-2 rounded-3xl text-white flex gap-2">
          Say Hello
          <ArrowRight color="#fff" />
        </button>
        <button className="border px-5 py-2 rounded-3xl border-gray-500">
          My portfolio
        </button>
      </div>
      <h2 className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent py-8 w-full px-16">
        Developed by Milton Dantas
      </h2>
    </footer>
  );
};

export default Footer;

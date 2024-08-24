import React from "react";
import { dataProjects } from "@/app/assets/data";
import Image from "next/image";

const Oferring: React.FC = () => {
  return (
    <main className="flex flex-col justify-around py-8  w-full gap-5 px-16">
      <h1 className="w-full text-center text-4xl font-bold ">
        My Offerings for You
      </h1>
      <article className="flex flex-col justify-around py-8  w-full gap-5">
        <h1 className="font-semibold text-2xl">Web Application</h1>
        <hr />
        <div className="flex flex-row gap-8 items-center w-full py-6">
          {dataProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-80 h-96 px-4 py-4 gap-4 rounded-3xl overflow-hidden bg-white shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <h2 className="text-lg font-semibold mb-4">{project.nome}</h2>
              <Image
                className="w-40 h-40 object-cover"
                src={project.image}
                alt={project.nome}
              />
              <p className="text-sm text-center text-gray-600 line-clamp-2 text-justify">
                {project.description}
              </p>
              <p className="w-full">
                Github:{" "}
                <a className="text-sm text-gray-500" href={project.link_github}>
                  My project
                </a>
              </p>
              <div className="flex">
                {project.technologies.map((item, index) => {
                  return (
                    <Image
                      className="h-6 w-6 object-cover rounded-full mr-2"
                      src={item.icon}
                      key={index}
                      alt={item.nome}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="flex flex-col justify-around py-8  w-full gap-5">
        <h1 className="font-semibold text-2xl">Mobile Application</h1>
        <hr />
        <div className="flex flex-row gap-8  items-center  w-full py-6 ">
          <div className="flex flex-col items-center  w-64 h-64 rounded-3xl bg-gradient-to-r from-indigo-400 to-cyan-400   text-cyan-50">
            <h2>Coming Son...</h2>
          </div>
          <div className="flex flex-col items-center  w-64 h-64 rounded-3xl bg-gradient-to-r from-indigo-400 to-cyan-400   text-cyan-50">
            <h2>Coming Son...</h2>
          </div>
        </div>
      </article>
      <article className="flex flex-col justify-around py-8  w-full gap-5">
        <h1 className="font-semibold text-2xl">Web Design</h1>
        <hr />
        <div className="flex flex-row gap-8  items-center  w-full py-6 ">
          <div className="flex flex-col items-center  w-64 h-64 rounded-3xl bg-gradient-to-r from-indigo-400 to-cyan-400   text-cyan-50">
            <h2>Coming Son...</h2>
          </div>
          <div className="flex flex-col items-center  w-64 h-64 rounded-3xl bg-gradient-to-r from-indigo-400 to-cyan-400   text-cyan-50">
            <h2>Coming Son...</h2>
          </div>
          <div className="flex flex-col items-center  w-64 h-64 rounded-3xl bg-gradient-to-r from-indigo-400 to-cyan-400   text-cyan-50">
            <h2>Coming Son...</h2>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Oferring;

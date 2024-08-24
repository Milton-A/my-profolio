import {
  ArrowRight,
  Facebook,
  Github,
  Hand,
  Instagram,
  Linkedin,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <main className="flex justify-center items-center px-16 py-16 gap-12 bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="w-[70%] h-[80%] flex flex-col gap-10 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl">Hey there, {"It's Milton Dantas."}</h1>
          <h1 className="text-4xl bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            {"Full-Stack Developer."}
          </h1>
          <p className="text-justify text-base font-light text-gray-800">
            Desenvolvedor Front-End apaixonado por criar interfaces intuitivas e
            agradáveis, combinando habilidades sólidas em UI/UX design com
            proficiência em tecnologias como HTML, CSS e JavaScript. Com
            experiência em projetos React JS e React Native, sou dedicado a
            fornecer soluções web de alta qualidade e otimizadas. Estudante do
            5º ano de Engenharia Informática, buscando constantemente aprimorar
            meu conhecimento e aplicar minhas habilidades de desenvolvimento.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-indigo-400 to-cyan-500 px-5 py-2 rounded-3xl text-white flex gap-2">
            Say Hello
            <ArrowRight color="#fff" />
          </button>
          <a
            href="https://github.com/Milton-A"
            className="border px-5 py-2 rounded-3xl border-gray-500"
          >
            My Github
          </a>
        </div>
      </div>
      <div className="w-[50%] rounded-full">
        <Image
          className="rounded-full "
          src={require("@/app/assets/foto.png")}
          alt=""
        />
      </div>
    </main>
  );
};

export default Main;

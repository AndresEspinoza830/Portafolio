import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px]  w-full h-full mx-auto flex justify-center items-center ">
        <div className="space-y-8">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className=" text-gray-700">
            Hola, soy <span className="text-[#5651e5]">Andres</span>
          </h1>
          <h1 className=" text-gray-700">Soy Desarrollador de Software</h1>
          <p className="text-gray-600 max-w-[70%] m-auto ">
            Actualmente soy estudiante de ultimo ciclo de la carrera Desarrollo
            de Software y con ganas de practicar en el ambito laboral!
          </p>
          <div className="flex justify-center  max-w-[330px] m-auto  items-center space-x-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
              <a
                href="https://www.linkedin.com/in/andres-espinoza-49961022a/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
              <a href="https://github.com/AndresEspinoza830">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

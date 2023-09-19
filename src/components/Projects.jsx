import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-screen">
      <div className="max-w-[1240px] mx-auto w-full h-full px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Algunos Proyectos Locales</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              src="/porjectPlanificador.PNG"
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tecnologías
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Vite - React - TailwindCSS
              </p>
              <a
                href="https://heartfelt-creponne-b71fe9.netlify.app"
                target="_blank"
              >
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Ver Prueba
                </p>
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              src="/projectVETERINARIA.PNG"
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tecnologias
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Vite - React - TailwindCSS
              </p>
              <a
                href="https://admirable-meerkat-2e0ea6.netlify.app/"
                target="_blank"
              >
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Ver Prueba
                </p>
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              src="/projectCRM.PNG"
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tecnologias
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Vite - React - Express - Node - MongoDB - JWT
              </p>
              <a href="#">
                {/* <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p> */}
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              src="/booking.PNG"
              alt=""
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tecnologias
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Vite - React - CSS - Express - MongoDBAtlas
              </p>
              <a href="#">
                {/* <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

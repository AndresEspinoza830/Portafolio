import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto w-full h-full flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Tecnologias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 m-auto justify-center items-center">
              <div className="m-auto">
                <img src="/JS.png" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src="/react.jpg" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src="/node.png" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex items-center justify-center">
                <img src="/express.png" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>EXPRESS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src="/sql.png" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src="/mongodb.png" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MONGODB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src="/mysql.png" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MYSQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src="/tailwind.jpg" alt="" width="60px" height="60px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

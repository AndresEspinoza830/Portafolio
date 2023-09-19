const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">¿Quien soy?</h2>
          <p className="py-4 text-gray-600">-Andres Espinoza Palomino</p>
          <p className="py-4 text-gray-600">
            -Estudiante de la carrera Desarrollo de Software
          </p>
          <p className="py-4 text-gray-600">
            -Estoy cursando el ultimo ciclo, a lo largo de la carrera he visto
            distintos cursos como: <br />
            - Diseño y Desarrollo Web <br />
            - Analisis y Diseño de Sistemas I Y II <br />
            - Programacion Web I Y II <br />
            - Diseño y Programacion Avanzada de Base de Datos (SQL) <br />
            - Desarollo de Aplicaciones I Y II (C#, .NET 7, WCF) <br />-
            Desarrollo de Aplicaciones Empresariales (NetBeans, MySql,
            SpringBoot)
            <br /> - Entre otras mas!
          </p>

          {/* <p className="py-4 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p> */}
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300"
        >
          <img
            src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

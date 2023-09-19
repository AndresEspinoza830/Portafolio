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
            distintos cursos como Programacion Web I Y II, Diseño y Programacion
            Avanzada de Base de Datos (SQL), Desarollo de Aplicaciones I Y II
            (C#, .NET 7, WCF), Desarrollo de Aplicaciones Empresariales
            (NetBeans, MySql, SpringBoot)
          </p>
          <p className="py-4 text-gray-600">
            -He tenido la oportunidad de trabjar como freelancer en un proyecto
            por unos meses y me ayudo mucho a aprender nuevas cosas y trabajar
            en equipo y ahora estoy buscando una empresa que me de la
            oportunidad de crecer profesionalmente y seguir aprendiendo en el
            mundo de TI.
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

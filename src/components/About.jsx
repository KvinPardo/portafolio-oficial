import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px]">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-3xl font-bold inline border-b-4 border-pink-400">
              Acerca de mí
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p></p>
          </div>
          <div>
            <p className="text-justify text-xl">
               Soy una persona joven, formal y llena de energía para integrarme en un equipo de trabajo, para poder aportar mi conocimiento y formación para así poder aumentar mi experiencia profesional en un entorno real, fuera del ámbito académico. Mi objetivo profesional radica en la posibilidad de encontrar una empresa estable para crecer profesionalmente. Generalmente, me encuentro siempre realizando cursos de Udemy o Youtube. También, me gustan los videos juegos, el cine y la música.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

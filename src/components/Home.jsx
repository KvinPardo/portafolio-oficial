import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {

  const handleClick = () => {
    console.log('The link was clicked.');
  }

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hola, me llamo</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kevin Pardo Veas
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Analista Programador
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Desarrollo Aplicaciones y Páginas Webs con <span className="text-xl text-[#ccd6f6]">React Js</span>, siempre me ha gustado Desarrollar Sitios y Aplicaciones Webs, me divierte hacerlo y lo disfruto al 100%.
        </p>
        <div>
          <Link to="works" smooth={true} duration={500}
            className="text-white w-fit group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 cursor-pointer">
            Ver Trabajos
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

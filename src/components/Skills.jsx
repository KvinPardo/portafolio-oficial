import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import WordPress from "../assets/wordpress.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[100px] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600">
            Conocimientos
          </p>
          <p className="py-4">// Tecnologías con las que he trabajado</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={HTML} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={CSS} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={JavaScript} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={ReactImg} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">React Js</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={Tailwind} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={WordPress} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">WordPress</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={Node} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">Node Js</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-x-110 duration-500">
            <img src={GitHub} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">// Contacto y Redes Sociales</p>
        </div>
        <div className="flex text-white justify-center items-center my-8">
          <div className="md:flex gap-4">
            <a
              href="mailto:kevin.pardov26@gmail.com"
              className="flex justify-center items-center gap-4 border shadow-2xl p-4 hover:scale-x-105 duration-500 my-8"
            >
              <SiGmail size={20} />
              Gmail
            </a>

            <a
              href="https://github.com/KvinPardo"
              target="_blank"
              className="flex justify-center items-center gap-4 border shadow-2xl p-4 hover:scale-x-105 duration-500 my-8"
            >
              <FaGithub size={20} />
              Github
            </a>

            <a
              href="https://cv-kevin-pardo.netlify.app/"
              target="_blank"
              className="flex justify-center items-center gap-4 border shadow-2xl p-4 hover:scale-x-105 duration-500 my-8"
            >
              <BsFillPersonLinesFill size={20} />
              Resumen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

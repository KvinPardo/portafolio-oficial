import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* img style= {{width: '50px'}} */}
        
      </div>

      {/* Menú */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Acerca de mi
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Conocimientos
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/*  Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menú */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0  left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl ">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Inicio
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            Acerca de mi
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Conocimientos
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link to="works" smooth={true} duration={500} onClick={handleClick}>
            Proyectos
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in-out duration-500 bg-[#0e76a8]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kevinpardoveas/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in-out duration-500 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/KvinPardo"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in-out duration-500 bg-[#db4a39]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:kevin.pardov26@gmail.com"
            >
              Gmail <SiGmail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in-out duration-500 bg-[#999999]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://kevin-pardo-cv.netlify.app/"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

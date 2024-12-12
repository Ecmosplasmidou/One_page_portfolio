import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_1, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link to='/' className="flex items-center gap-2" 
          onClick={() =>{ setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo_1} alt="logo" className="w-28 h-28 object-contain" />
            <div className="flex gap-4 ml-10 xs:flex xs:justify-center">
              <a href="https://github.com/Ecmosplasmidou" target="_blank" rel="noopener noreferrer" onClick={() => console.log('Navigating to GitHub')}>
                <FaGithub className="text-white w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/cassam-mahadawoo-b72612176/" target="_blank" rel="noopener noreferrer" onClick={() => console.log('Navigating to Linkedin')}>
                <FaLinkedin className="text-white w-6 h-6" />
              </a>
            </div>
        </Link>
        <ul className="list-none hidden xl:flex flex-row gap-10 ">
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active==link.title ? 'text-white': 'text-secondary'}
               hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="xl:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-blue-500 via-gray-700 to-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] md:min-w-[200px] rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link)=>(
              <li key={link.id} className={`${active==link.title ? 'text-white': 'text-secondary'}
                font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;

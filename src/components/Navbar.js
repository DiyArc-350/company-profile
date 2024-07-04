import { useState } from "react";

import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [active,setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="hohoho" className="w-[156px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
         {navLinks.map((nav) => (
          <li key={nav.id} className="mr-6">
            <NavLink
              to={`/${nav.id}`}
              className={({ isActive }) =>
                'font-poppins font-normal cursor-pointer text-[16px] ' +
                (isActive ? 'text-dimWhite' : 'text-[#16386e8d]')
              }
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[rgb(188,188,188)] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li key={nav.id} className="mr-6">
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    'font-poppins font-normal cursor-pointer text-[16px] ' +
                    (isActive ? 'text-dimWhite' : 'text-[#16386e8d]')
                  }
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

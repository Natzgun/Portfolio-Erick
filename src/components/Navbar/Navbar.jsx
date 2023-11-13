// import { NavLink } from "react-router-dom"; // De momento soloq uiero scroll
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const navLists = [
    { name: "Home", path: "home" },
    { name: "About", path: "about-me" },
    { name: "My career", path: "career" },
    { name: "Projects", path: "projects" },
  ];
  const [enlaceActivo, establecerEnlaceActivo] = useState("home");

  const manejarClickEnlace = (path) => {
    establecerEnlaceActivo(path);
  };
  return (
    <nav className="md:block hidden">
      <div className="bg-slate-950 fixed h-screen w-14">
        <ul className="flex flex-col justify-center text-gray-400 text-center h-full items-center gap-24">
          {navLists.map((nav) => (
            <li key={nav.path} className={`-rotate-90 ml-4 w-24 hover:text-pink-600 ${
                enlaceActivo === nav.path ? "text-pink-500 font-bold border-t-2 border-pink-500 rounded-md" : "" }`}>
              <Link 
                to={nav.path}
                smooth={true}
                duration={500}
                onClick={() => manejarClickEnlace(nav.path)}
              >{nav.name}</Link>
              {/* <NavLink to={nav.path}>{nav.name}</NavLink> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

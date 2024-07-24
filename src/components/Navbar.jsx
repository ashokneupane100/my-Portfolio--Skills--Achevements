import { useState } from "react";
import pic from "../../public/code.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import{Link} from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
      url:"/"
    },

    {
      id: 2,
      text: "About",
      url:"/about"
    },

    {
      id: 3,
      text: "Portfolio",
      url:"/portfolio"
    },

    {
      id: 4,
      text: "Experience",
      url:"/experience"
    },

    {
      id: 5,
      text: "Contact",
      url:"/contact"
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Ashok <span className="text-green-800 text-2xl">Neupane</span>
              <p className="text-sm">Full Stack Web Developer</p>
            </h1>
          </div>
          </Link>

          <div>
            {/* Desktop nav bar */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text,url }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to={url}>
                  {text}</Link>

                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <IoMdCloseCircleOutline size={30} />
              ) : (
                <GiHamburgerMenu size={30} className="cursor-pointer" />
              )}
            </div>
          </div>
        </div>

       {/* mobile navbar */}
       {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text,url }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={url}
                    
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

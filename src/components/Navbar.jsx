import { useState } from "react";
import pic from "../../public/photo.avif";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },

    {
      id: 2,
      text: "About",
    },

    {
      id: 3,
      text: "Portfolio",
    },

    {
      id: 4,
      text: "Experience",
    },

    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Ashok <span className="text-green-800 text-2xl">Neupane</span>
              <p className="text-sm">Web/App Developer</p>
            </h1>
          </div>

          <div>
            {/* Desktop nav bar */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <GiHamburgerMenu size={30} />
              ) : (
                <IoMdCloseCircleOutline size={30} />
              )}
            </div>
          </div>
        </div>

        {/* mobile nav bar */}

        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer space-y-3"
                  key={id}
                >
                  {text}
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

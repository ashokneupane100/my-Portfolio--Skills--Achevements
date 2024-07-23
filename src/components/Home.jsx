import {
  FaFacebookSquare,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 sm:mt-12 md:mt-24">
            <span className="text-xl text-gray-600">Welcome to my feed.</span>
            <div className="flex space-x-2 text-2xl md:text-4xl mt-2">
              <h1 className="font-bold">Hello, I am a</h1>
              <span className="text-red-700 font-bold">Developer</span>
            </div>

            <p className="text-sm md:text-md text-justify text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              dolor aut itaque eligendi laborum ea? Magnam, impedit unde. Est
              expedita iure aut laboriosam debitis necessitatibus similique
              eligendi numquam nostrum beatae.
            </p>

            {/* Social Media icons */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 space-y-6 md:space-y-0 md:space-x-12">
              <div className="space-y-2 text-center md:text-left">
                <h1 className="font-bold text-xl">Available on:</h1>
                <ul className="flex space-x-5 justify-center md:justify-start">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaYoutube className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://telegram.org/" target="_blank">
                      <FaTelegram className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h1 className="font-bold text-xl">Currently Working on:</h1>
                <div className="flex space-x-5 justify-center md:justify-start">
                  <DiMongodb className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiExpress className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaReact className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaNodeJs className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            {/* Add additional content here if needed */}
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
    </>
  );
};

export default Home;

import pic from "../../public/mernStack.jpg";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import Experience from "./Experience";
import { ReactTyped } from "react-typed";

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col md:w-1/2 mt-12 md:mt-24 space-y-4 order-1 md:order-1">
            <span className="text-xl font-bold text-center">
              Welcome to My Feed
            </span>
            <div className="flex flex-col items-center text-2xl md:text-4xl space-y-4">
              <div className="flex flex-col items-center">
                <h4 className="whitespace-nowrap text-center text-2xl">Hello, I am a</h4>
                <div className="w-full flex justify-center">
                  <div className="relative w-full max-w-[500px]">
                    <ReactTyped
                      className="text-blue-800 font-bold text-4xl"
                      strings={[
                        "FullStack <br> Developer",
                        "Programmer",
                        "Coder",
                        "Software <br> Engineer",
                        "JavaScript <br> Lover",
                      ]}
                      typeSpeed={40}
                      backSpeed={0}
                      loop={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <p className="text-xl text-justify mt-12">
              Hello, I am Ashok Neupane; Welcome to my portfolio page! As the
              journey of skill-building never ends, this portfolio will
              continually evolve and expand. Stay tuned for updates...
            </p>
            <br />
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:w-1/2 mt-8 md:mt-20 order-2 md:order-2">
            <img
              src={pic}
              className="rounded-full w-[300px] md:w-[400px] lg:w-[500px] mx-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              alt="Programmer"
            />
            <div className="space-y-6 mt-8 text-center">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Currently working on</h1>
              <div className="flex flex-wrap justify-center text-3xl md:text-4xl lg:text-6xl gap-4">
                <SiMongodb className="text-green-800 hover:scale-110 hover:text-blue-500 cursor-pointer" />
                <SiExpress className="text-gray-700 hover:scale-110 hover:text-blue-500 cursor-pointer" />
                <FaReact className="text-blue-800 hover:scale-110 hover:text-green-500 cursor-pointer" />
                <FaNodeJs className="text-green-800 hover:scale-110 hover:text-purple-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <Experience className="mt-5"/>
      </div>
      <hr />
    </>
  );
}

export default Home;

//needs some adjustment; show your talent to make it better
import js from "../../../public/javascript.png";
import { Link } from "react-router-dom";

function JavaScriptMain() {
  const cardItem = [
    {
      id: 1,
      logo: js,
      name: "1. Heart Animation Project Using Javascript",
      link: "/jsone",
    },

    {
      id: 2,
      logo: js,
      name: "Day 2",
      link: "/jstwo",
    },

    {
      id: 3,
      logo: js,
      name: "Day 3",
      link: "/jsthree",
    },

    {
      id: 4,
      logo: js,
      name: "",
      link: "/jsfour",
    },

    {
      id: 5,
      logo: js,
      name: "5. ",
      link: "/jsfive",
    },
    {
      id: 6,
      logo: js,
      name: "Day 6",
      link: "/jssix",
    },


    {
      id: 7,
      logo: js,
      name: "Day 7",
      link: "/jsseven",
    },

    {
      id: 8,
      logo: js,
      name: "Day 8",
      link: "/jseight",
    },

    {
      id: 9,
      logo: js,
      name: "Day 9",
      link: "/jsnine",
    },

    {
      id: 10,
      logo: js,
      name: "Day 10",
      link: "/jsten",
    },

    {
      id: 11,
      logo: js,
      name: "Day 11",
      link: "/jseleven",
    },

    {
      id: 12,
      logo: js,
      name: "Day 12",
      link: "/jstwelve",
    },






  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 py-10 md:px-20 my-20"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Learned CSS By Days:
        </h1>
        <p className="text-center text-xl text-gray-800 mb-8">
         CSS also known as cascading style sheet is the core technology of world wide web; I
          have been continuously updating on these technologies; click on each
          section to see what I have been getting and doing with these skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-7">
          {cardItem.map(({ id, logo, name, link }) => (
            <Link key={id} to={link}>
              <div
                className="flex flex-col items-center justify-center bg-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer text-gray-300 hover:scale-110"
              >
                <img
                  src={logo}
                  className="w-32 h-32 rounded-full mt-4"
                  alt={name}
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold mb-2">{name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JavaScriptMain;

import css from "../assets/css.jpg";

import { Link } from "react-router-dom";

function CssMain() {
  const cardItem = [
    {
      id: 1,
      logo: css,
      name: "Day 1",
      link: "/cssone",
    },

    {
      id: 2,
      logo: css,
      name: "Day 2",
      link: "/csstwo",
    },

    {
      id: 3,
      logo: css,
      name: "Day 3",
      link: "/cssthree",
    },

    {
      id: 4,
      logo: css,
      name: "Photos Grid",
      link: "/cssfour",
    },

    {
      id: 5,
      logo: css,
      name: "5. List and Styles",
      link: "/cssfive",
    },
    {
      id: 6,
      logo: css,
      name: "Day 6",
      link: "/csssix",
    },


    {
      id: 7,
      logo: css,
      name: "Day 7",
      link: "/cssseven",
    },

    {
      id: 8,
      logo: css,
      name: "Day 8",
      link: "/csseight",
    },

    {
      id: 9,
      logo: css,
      name: "Day 9",
      link: "/cssnine",
    },

    {
      id: 10,
      logo: css,
      name: "Day 10",
      link: "/cssten",
    },

    {
      id: 11,
      logo: css,
      name: "Day 11",
      link: "/csseleven",
    },

    {
      id: 12,
      logo: css,
      name: "Day 12",
      link: "/csstwelve",
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
          {cardItem.map(({ id, logo, name, link }) => (
            <Link key={id} to={link}>
              <div
                className="flex flex-col items-center justify-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-110"
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

export default CssMain;

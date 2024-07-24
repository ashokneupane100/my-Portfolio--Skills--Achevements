import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import github from "../../public/github.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      link: "/html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      link: "/css",
    },

    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      link: "/javascript",
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDB",
      link: "/mongo",
    },
    {
      id: 5,
      logo: express,
      name: "Express JS",
      link: "/express",
    },
    {
      id: 6,
      logo: reactjs,
      name: "React",
      link: "/javascript",
    },
    {
      id: 7,
      logo: nodejs,
      name: "Node JS",
      link: "/node",
    },
    {
      id: 8,
      logo: github,
      name: "Git Technology",
    },
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 py-10 md:px-20 my-20">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Experience and Continuous Learning
        </h1>
        <p className="text-center text-gray-600 mb-8">
          I have more than 2 years of experience in these technologies and I
          have been continuously updating on these technologies; click on each
          section to see what I have been doing with these skills.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-110"
              onClick={() => (window.location.href = link)}
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

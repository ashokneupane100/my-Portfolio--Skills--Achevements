import css from "../../../public/css.jpg";
import { Link } from "react-router-dom";

function CssMain() {
  const cardItem = [
    {
      id: 1,
      logo: css,
      name: "CSS Day 1",
      link: "/cssone",
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
          I have more than 2 years of experience in these technologies and I
          have been continuously updating on these technologies; click on each
          section to see what I have been doing with these skills.
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

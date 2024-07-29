import html from '../../public/html.png';
import css from '../../public/css.jpg';
import javascript from '../../public/javascript.png';
import mongoDB from '../../public/mongodb.jpg';
import express from '../../public/express.png';
import reactjs from '../../public/reactjs.png';
import nodejs from '../../public/node.png';

function Portfolio() {
  const cardItem = [
    { id: 1, logo: html, name: 'HTML' },
    { id: 2, logo: css, name: 'CSS' },
    { id: 3, logo: javascript, name: 'JavaScript' },
    { id: 4, logo: mongoDB, name: 'MongoDB' },
    { id: 5, logo: express, name: 'Express' },
    { id: 6, logo: reactjs, name: 'ReactJS' },
    { id: 7, logo: nodejs, name: 'NodeJS' }
  ];

  return (
    <div name="Portfolio" className="w-full h-full px-4 py-10 mt-5 md:px-10 md:py-16 bg-green-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
        <div className="text-center mb-8">
          <div className="underline font-semibold text-lg">Featured Projects</div>
        </div>
        <div className="grid gap-8 grid-cols-1  md:grid-cols-2 justify-center">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
            >
              <img
                src={logo}
                alt={name}
                className="w-32 h-32 object-cover rounded-full mt-4"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <p className="text-gray-100 mb-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat aliquid minus natus.
                </p>
                <div className="flex flex-wrap justify-center space-x-4 space-y-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded">
                    Video
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                    Source code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

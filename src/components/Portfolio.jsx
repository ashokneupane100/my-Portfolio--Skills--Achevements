import java from '../../public/java.png';
import python from '../../public/python.webp';
import mongoDB from '../../public/mongodb.jpg';
import express from '../../public/express.png';
import reactjs from '../../public/reactjs.png';
import nodejs from '../../public/node.png';

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: 'MongoDB',
    },
    {
      id: 2,
      logo: express,
      name: 'Express',
    },
    {
      id: 3,
      logo: reactjs,
      name: 'ReactJS',
    },
    {
      id: 4,
      logo: nodejs,
      name: 'NodeJS',
    },
    {
      id: 5,
      logo: python,
      name: 'Python',
    },
    {
      id: 6,
      logo: java,
      name: 'Java',
    },
  ];

  return (
    <div name="Portfolio" className="bg-gray-100 py-12">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
        <div className="text-center mb-8">
          <div className="underline font-semibold">Featured Projects</div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
            >
              <img
                src={logo}
                alt={name}
                className="w-40 h-40 object-cover rounded-full mt-4"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat aliquid minus natus.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
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

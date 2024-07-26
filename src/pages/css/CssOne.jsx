import styles from './CssOne.module.css';
import { Link } from 'react-router-dom';

const CssOne = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-36 md:px-20 mb-10">
      <div>
        <h1 className="text-center mb-10">
          Here in this first day, we learned about how to use CSS flex properties. CSS flex is an excellent way to arrange items as shown below. The source code for this page is available at this link:
        </h1>
        <Link
          to="https://github.com/ashokneupane100/my-Portfolio--Skills--Achevements/blob/b00e42cbbcbe9774fa5a2ad26c132ab7d27c7542/src/pages/css/CssOne.jsx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <button className="bg-green-900 text-white p-6 w-full md:w-1/2 rounded-lg mb-4 text-lg md:text-2xl">
            Click here to find the code for this component
          </button>
        </Link>
        <div className={styles.header}>
          <h1>CSS Flexbox by Mindriser Inc</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <h2>About HTML</h2>
            <p>
              CSS is a great technology. It is the tech of the WWW. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quidem rerum, beatae rem natus voluptate modi velit facilis amet maiores ut eius illo, expedita mollitia corporis deserunt ratione qui ducimus.
            </p>
          </div>
          <div className={styles.box}>
            <h2>About CSS</h2>
            <p>
              CSS is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum reprehenderit accusamus ad voluptatem beatae odio, quos, a explicabo quisquam accusantium ea non sint doloremque dignissimos mollitia perferendis vitae dolor.
            </p>
          </div>
          <div className={styles.box}>
            <h2>JavaScript</h2>
            <p>
              JavaScript Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptatem totam architecto nobis voluptate at sed minus perspiciatis qui corrupti molestias, minima sunt non dignissimos quo quibusdam maxime commodi aperiam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssOne;

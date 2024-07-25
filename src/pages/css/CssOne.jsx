// CssOne.jsx
import styles from './CssOne.module.css';

const CssOne = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-36 md:px-20">
      <div>
        <div className={styles.header}>
          <h1>CSS Flexbox by Mindriser Inc</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <h2>About HTML</h2>
            <p>
              CSS is a great technology. It is the tech of www. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem rerum, beatae rem natus voluptate modi velit facilis amet maiores ut eius illo, expedita mollitia corporis deserunt ratione qui ducimus.
            </p>
          </div>
          <div className={styles.box}>
            <h2>About CSS</h2>
            <p>
              CSS is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsum reprehenderit accusamus ad voluptatem beatae odio, quos, a explicabo quisquam accusantium ea non sint doloremque dignissimos mollitia perferendis vitae dolor.
            </p>
          </div>
          <div className={styles.box}>
            <h2>JavaScript</h2>
            <p>
              JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem totam architecto nobis voluptate at sed minus perspiciatis qui corrupti molestias, minima sunt non dignissimos quo quibusdam maxime commodi aperiam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssOne;

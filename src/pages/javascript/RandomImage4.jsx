import { useEffect } from 'react';
import styles from './RandomImage4.module.css';

const RandomImage4 = () => {
  useEffect(() => {
    const imageContainerEl = document.querySelector(`.${styles.imageContainer}`);
    const btnEl = document.querySelector(`.${styles.btn}`);

    if (btnEl) {
      btnEl.addEventListener('click', () => {
        const imageNum = 10;
        addNewImages(imageContainerEl, imageNum);
      });
    } else {
      console.error("Button element not found");
    }
  }, []);

  const addNewImages = (container, count) => {
    for (let index = 0; index < count; index++) {
      const newImgEl = document.createElement('img');
      newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
      container.appendChild(newImgEl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-800 p-4">
         <div className="text-center text-lg max-w-md mb-6">
        <h1 className="font-semibold bg-gray-100 text-black rounded-lg p-7 ">
          At the End of the Photos 'Load More ...' button is made functioning by JavaScript. At one Click 10 images will be Loaded and No image is Repeated.
          <a
          href="https://github.com/ashokneupane100/500-Plus-JavaScript-Projects/commit/4c377fb4542c721eb3c62b6911370647c11e8a0d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-800 text-white p-2 rounded-lg hover:bg-green-600 mt-5 transition-colors duration-300 w-full max-w-xs">
            Click here to get the source code
          </button>
        </a>
        </h1>
        
      </div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="https://picsum.photos/300/300?random=1" />
        <img src="https://picsum.photos/300/300?random=2" />
        <img src="https://picsum.photos/300/300?random=3" />
        <img src="https://picsum.photos/300/300?random=4" />
      </div>

      <button className={styles.btn}>Click to Load More ...</button>
    </div>
    </div>
  );
};

export default RandomImage4;

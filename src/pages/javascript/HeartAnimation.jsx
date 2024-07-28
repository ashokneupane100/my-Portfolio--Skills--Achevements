import { useEffect, useRef } from "react";
import styles from "./HeartAnimation.module.css";

const HeartAnimation = () => {
  
  const containerRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;

    const handleMouseMove = (event) => {
      const rect = containerEl.getBoundingClientRect();
      const xPos = event.clientX - rect.left;
      const yPos = event.clientY - rect.top;
      const spanEl = document.createElement("span");
      spanEl.style.left = xPos + "px";
      spanEl.style.top = yPos + "px";
      const size = Math.random() * 100;
      spanEl.style.width = size + "px";
      spanEl.style.height = size + "px";
      spanEl.className = styles.heart;
      containerEl.appendChild(spanEl);
      setTimeout(() => {
        spanEl.remove();
      }, 6000);
    };

    containerEl.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerEl.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div className="mt-28 text-center">
        <h2 className="text-2xl font-bold">
          Heart Animation Using <br></br>JavaScript
        </h2>
        <p className="text-xl mt-4 mb-10">
          A simple heart trail animation using JavaScript HTML and CSS.If you
          move the mouse or cursor or tap on the mobile screen; a trailing and
          moving heart will be seen.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 mb-5 text-2xl">
        <a
          href="https://github.com/ashokneupane100/cool_js_projects/blob/main/index.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-900 text-white p-4 rounded-lg border-2 border-red-500">
            Click here for the <br /> JavaScript code
          </button>
        </a>
        <a
          href="https://github.com/ashokneupane100/cool_js_projects/blob/main/style.css"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-900 text-white p-4 rounded-lg border-2 border-yellow-500">
            Click here for the <br /> CSS code
          </button>
        </a>
      </div>

      <div className="mb-3 text-2xl text-center">
        <h1>Tap or move your mouse below to see the magic.</h1>
      </div>
      <div ref={containerRef} className={styles.container}></div>
    </div>
  );
};

export default HeartAnimation;

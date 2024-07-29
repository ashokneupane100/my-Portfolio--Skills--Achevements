import { useState } from 'react';
import styles from './RippleButton5.module.css';

const RippleButton5 = () => {
  window.scroll(0, 0);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [isRippleActive, setIsRippleActive] = useState(false);

  const handleMouseEnter = (event) => {
    const x = event.clientX - event.target.getBoundingClientRect().left;
    const y = event.clientY - event.target.getBoundingClientRect().top;
    setRipplePosition({ x, y });
    setIsRippleActive(true);
  };

  const handleMouseLeave = () => {
    setIsRippleActive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center text-lg max-w-md mb-6">
        <h1 className="font-semibold text-gray-800">
          This is a special effect made by combining CSS and JavaScript. If you
          touch each corner, on the second button; the green-colored ripple will originate and fill
          the whole button.
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-2"> 
        <a
          href="https://github.com/ashokneupane100/500-Plus-JavaScript-Projects/tree/main/Button%20Ripple%20Effect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-800 text-white p-4 rounded-lg hover:bg-green-600 transition-colors duration-300 w-full max-w-xs">
            Click here to get the source code
          </button>
        </a>
  <br /><br />
        {/* Second button with increased size */}
        <button
          className="btn bg-pink-500 text-black p-5 rounded-lg relative overflow-hidden text-3xl w-full max-w-xs" // Increased padding and font size
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(event) => {
            const x = event.clientX - event.currentTarget.getBoundingClientRect().left;
            const y = event.clientY - event.currentTarget.getBoundingClientRect().top;
            event.currentTarget.style.setProperty("--xPos", `${x}px`);
            event.currentTarget.style.setProperty("--yPos", `${y}px`);
          }}
        >
          <span className="relative z-10">Button</span> {/* Ensure text is above ripple */}
          <span
            className={`ripple absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isRippleActive ? 'active' : ''}`}
            style={{
              left: ripplePosition.x,
              top: ripplePosition.y,
            }}
          ></span>
        </button>
      </div>

      <style jsx>{`
        .btn {
          position: relative;
          display: inline-block;
          overflow: hidden;
          transition: background-color 0.5s;
        }

        .btn::before {
          content: "";
          position: absolute;
          background-color: rgb(3, 121, 38);
          width: 0;
          height: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s, border-radius 0.5s;
          left: var(--xPos);
          top: var(--yPos);
        }

        .btn:hover::before {
          width: 300%;
          height: 300%;
          border-radius: 0;
        }

        .ripple {
          position: absolute;
          background-color: rgba(3, 121, 38, 0.6); /* Semi-transparent ripple */
          width: 0;
          height: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease-out, height 0.5s ease-out;
          pointer-events: none; /* Prevent mouse events on the ripple */
          z-index: 0; /* Keep ripple below the text */
        }

        .ripple.active {
          width: 300%; /* Expand to full size */
          height: 300%; /* Expand to full size */
          border-radius: 0; /* Change to square */
        }
      `}</style>
    </div>
  );
};

export default RippleButton5;
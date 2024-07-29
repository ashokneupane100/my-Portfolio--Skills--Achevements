import { Link } from "react-router-dom";
export default function CalenderClock() {
  const iframeStyle = {
    width: '100%',
    height: '100vh',
    border: 'none',
  };

  return (
    <div>
    <div className="mt-12 md:mt-12" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
      <iframe
        src="https://cool-js-projects-eight.vercel.app/"
        style={iframeStyle}
        title="Calender With the Digital Clock"
      />
    
      
    </div>
    </div>
  );
}

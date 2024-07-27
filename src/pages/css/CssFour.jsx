import { Link } from "react-router-dom";
export default function CssFour() {
  const iframeStyle = {
    width: '100%',
    height: '100vh', // Adjust height as needed
    border: 'none',
  };

  return (
    <div className="flex flex-col m-3 mt-20">
        <div className="text-center">
        <h1>In this Exercise; we have used CSS Grids to make the beautiful Photos of Chitwan National Park. Here photos take different grids.In large screens: the css looks like this: <br />
        .gallery 
        
        display: grid; <br />
        gap: 8px; <br />
        grid-template-columns: repeat(3, 1fr);<br />
        grid-auto-rows: 120px;

        but this second box with the waterfall takes all the rows reaching to the ground.Hover effect is excellent.It is fully responsive.

       </h1>
        </div>
           <div className="text-center mt-3 mb-[-2.8rem]">
        <Link to="https://github.com/ashokneupane100/CSS-Grid-in-Depth/blob/e452d7a3a2ad681c50485b80fe6b462a5a8a2436/index.html">
        <button className="bg-green-800 w-1/2 mx-auto mt-3 mb-[-2.5rem]  text-white rounded-lg p-3 hover:bg-green-700">Click here for the source code:</button>
        </Link>
        </div>


    <div className="mt-16 md:mt-20" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://css-in-depth-azure.vercel.app/"
        style={iframeStyle}
        title="External Website"
      />
    </div>
    </div>
  );
}

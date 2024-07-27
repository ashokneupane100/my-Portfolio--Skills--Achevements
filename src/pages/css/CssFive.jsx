
import cssList from '../../assets/cssfive/Screenshot_9.png';
import css1 from '../../assets/cssfive/css1.png';
import css2 from '../../assets/cssfive/css2.png';
import css3 from '../../assets/cssfive/css3.png';
import css4 from '../../assets/cssfive/css4.png';
import html1 from '../../assets/cssfive/html1.png';

export default function CssFive() {
  const style = `
    .image {
      width: 100%;
      height: 100vh; 
      object-fit: cover;
      transform: skew(0); 
      display: block;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap:1px;
    }
  `;

  return (
    <div>
      <style>
        {style}
      </style>
      <div className='mt-32 text-center mb-6 text-2xl'>
        <h1>The HTML and CSS codes below produce the above List and styles in CSS</h1>

      </div>
      <div className="flex items-center justify-center">
          <img src={cssList} width="450px" className="flex justify-center align-middle" alt="" />
        </div>
      <div className='grid'>
        <br />
        <img src={html1} className="image" alt="" />
        <img src={css1} className="image" alt="" />
        <img src={css2} className="image" alt="" />
        <img src={css3} className="image" alt="" />
        <img src={css4} className="image" alt="" />
      </div>
    </div>
  );
}

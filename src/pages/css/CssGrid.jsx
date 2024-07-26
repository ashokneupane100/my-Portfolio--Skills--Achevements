import { Link } from 'react-router-dom';

const GridComponent = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#2E2D52',
    margin: 0,
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Responsive columns
    gap: '.1rem', // Gap between grid items
    width: '90%',
    padding: '10px',
    backgroundColor: '#2E2D52',
    marginTop: '3%',
  };

  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    border: '2px solid white',
    borderRadius: '10px',
    color: 'black',
    height: '150px', // Ensure all boxes have the same height
  };

  const boxStyles = {
    box1: { gridColumn: 'span 2', gridRow: 'span 1', backgroundColor: '#7ED957' },
    box2: { backgroundColor: '#3b2db4' },
    box3: { backgroundColor: '#E94B3C' },
    box4: { backgroundColor: '#FDCB57' },
    box5: { backgroundColor: '#E94B3C' },
    box6: { backgroundColor: '#FDCB57' },
    box7: { backgroundColor: '#d957a3' },
    box8: { gridColumn: 'span 2', backgroundColor: '#FDCB57' },
  };

  return (
    <div style={containerStyle}>
      <div style={{ margin: '10%', alignItems: 'center', justifyContent: 'space-between', marginTop: '22%' }}>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Link
          to="https://github.com/ashokneupane100/my-Portfolio--Skills--Achevements/blob/main/src/pages/css/CssGrid.jsx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '50%' }}
        >
          <button className='bg-green-800 text-2xl p-3 rounded-lg mb-4 w-full'>
            Click Here to get the source code of this page.
          </button>
        </Link>
      </div>
      <div style={gridContainerStyle}>
        <div style={{ ...boxStyle, ...boxStyles.box1 }}>1</div>
        <div style={{ ...boxStyle, ...boxStyles.box2 }}>2</div>
        <div style={{ ...boxStyle, ...boxStyles.box3 }}>3</div>
        <div style={{ ...boxStyle, ...boxStyles.box4 }}>4</div>
        <div style={{ ...boxStyle, ...boxStyles.box5 }}>5</div>
        <div style={{ ...boxStyle, ...boxStyles.box6 }}>6</div>
        <div style={{ ...boxStyle, ...boxStyles.box7 }}>7</div>
        <div style={{ ...boxStyle, ...boxStyles.box8 }}>8</div>
      </div>
    </div>
  );
};

export default GridComponent;

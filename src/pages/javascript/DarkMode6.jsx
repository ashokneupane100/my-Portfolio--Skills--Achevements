import { useEffect, useState } from 'react';
import styles from './DarkMode6.module.css';

const DarkMode6 = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem('mode'));
    if (mode !== null) {
      setIsDarkMode(mode);
    }
    updateBody(mode !== null ? mode : false);
  }, []);

  const updateBody = (darkMode) => {
    document.body.style.background = darkMode ? '#121212' : '#FFFFFF';
    document.body.style.color = darkMode ? '#FFFFFF' : '#000000';
    document.body.style.transition = 'background 0.4s, color 0.4s';
  };

  const handleToggle = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      updateBody(newMode);
      localStorage.setItem('mode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div className='mt-[-7em]'>
         <div className={styles.container}>
      <h1 className={styles.title}>Dark Mode Toggle</h1>
      <div className={styles.toggleContainer}>
        <input
          type="checkbox"
          id="dark-mode"
          className={styles.input}
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <label htmlFor="dark-mode" className={styles.label}>
          <div className={styles.circle}></div>
        </label>
      </div>
      <h3 className={styles.toggleText}>Click to toggle Dark Mode ON and OFF</h3>
    </div>
    </div>
  );
};

export default DarkMode6;

import { Link } from "react-router-dom";

const CssThree = () => {
  const styles = {
    container: {
      marginTop: '7rem',
      marginLeft: '2.5rem',
      marginRight: '2.5rem',
      padding: '2rem',
      backgroundColor: 'rgb(1, 41, 1)',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '0.5rem',
    },
    introText: {
      marginBottom: '1.5rem',
      fontSize: '1.25rem',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
    },
    button: {
      fontSize: '1.25rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      color: 'white',
      flex: '1',
      maxWidth: '300px',
      transition: 'background-color 0.3s ease',
    },
    buttonHTML: {
      backgroundColor: '#d97706', // Tailwind yellow-800
    },
    buttonCSS: {
      backgroundColor: '#1e40af', // Tailwind blue-800
    },
    article: {
      marginBottom: '2rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgb(1, 41, 1)',
      color: 'white',
      textAlign: 'center',
    },
    h1: {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '2rem',
      padding: '0.5rem',
      borderRadius: '0.25rem',
    },
    h2: {
      backgroundColor: 'purple',
      padding: '0.5rem',
      borderRadius: '0.25rem',
    },
    h3: {
      backgroundColor: 'purple',
      padding: '0.5rem',
      borderRadius: '0.25rem',
    },
    thirdHeader: {
      backgroundColor: 'red',
      padding: '0.5rem',
      borderRadius: '0.25rem',
    },
    p: {
      fontSize: '1rem',
      marginBottom: '1rem',
      color: 'white',
    },
    specific: {
      backgroundColor: 'black',
      color: 'green',
      padding: '0.5rem',
      borderRadius: '0.25rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.introText}>
        <h1>Here we will know about the types of selectors with examples. Click down below to get the HTML and CSS Code Links on my GitHub. Please do not forget to give me a star.</h1>
      </div>

      <div style={styles.buttonContainer}>
        <Link
          to="https://github.com/ashokneupane100/CSS-in-Depth/blob/5810854b54fa57c28659ff73e63de3c85600277a/index.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.button, ...styles.buttonHTML }}
        >
          Click For HTML Source Code of this Lesson
        </Link>

        <Link
          to="https://github.com/ashokneupane100/CSS-in-Depth/commit/6238a683c1c85228be05caef6996ce9b421daf8f"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.button, ...styles.buttonCSS }}
        >
          Click For CSS Source Code of this Lesson
        </Link>
      </div>

      <div style={styles.article}>
        <article>
          <h1 style={styles.h1}>Universal Selector</h1>
          <p style={styles.p}>
            Here in this page; I want to select the background color of everything as green and the text color white. It can be done by universal selector.
          </p>

          <h2 style={styles.h2}>Type Selector</h2>
          <p style={styles.p}>
            A type selector targets all elements of a specific HTML tag. It is written as the element name itself. I want to make all the h1 type tags as blue background color and bold with white text.
          </p>

          <h2 className="thirdHeader" style={styles.thirdHeader}>Class Selector</h2>
          <p style={styles.p}>
            Here all h2 tags are selected to be pink; but I have specified as the class in the CSS that this one will be red.
          </p>

          <h3 style={styles.h3}>Next h3 tag</h3>
          <p style={styles.p}>
            This next h3 tag has again become with the pink background.
          </p>
        </article>

        <article>
          <h1 id="specific" style={styles.specific}>ID Selector</h1>
          <p id="specific-id" style={styles.p}>
            All h1 have green background; but this has black background because it is specified specifically. This is an example of an ID selector.
          </p>
        </article>
      </div>
    </div>
  );
};

export default CssThree;

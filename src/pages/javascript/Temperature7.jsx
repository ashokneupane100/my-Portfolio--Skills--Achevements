
export default function Temperature7() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // Inline styles for the iframe
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none", // Ensure there is no border
  };

  // Inline styles for the container
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full height of the viewport
    width: "100vw",  // Full width of the viewport
    margin: 0,       // Remove any default margin
    padding: 0,      // Remove any default padding
    backgroundColor: "#f0f4f8",
    fontFamily: "'Arial', sans-serif",
    overflow: "hidden", // Prevent overflow
  };

  return (
    <div>
    <div style={containerStyle}>
      <iframe
        src="https://temperature-conversioon.netlify.app/"
        style={iframeStyle}
        title="Temperature Conversion App"
      />
    </div>
    </div>
  );
}
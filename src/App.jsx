import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Css from "./pages/Css.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/css" element={<Css />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

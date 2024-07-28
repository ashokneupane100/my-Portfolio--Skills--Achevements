import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CssMain from './pages/css/CssMain';
import CssOne from './pages/css/CssOne';
import HtmlMain from "./pages/baseHtml/HtmlMain"
import CssGrid from './pages/css/CssGrid';
import CssThree from './pages/css/CssThree';
import CssFour from './pages/css/CssFour';
import CssFive from './pages/css/CssFive';
import HeartAnimation from './pages/javascript/HeartAnimation';
import JavaScriptMain from './pages/javascript/JavaScriptMain';


// Extracted Routes Component
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/css" element={<CssMain />} />
    <Route path="/cssone" element={<CssOne />} />
    <Route path="/html" element={<HtmlMain />} />
    <Route path="/csstwo" element={<CssGrid />} />
    <Route path="/cssthree" element={<CssThree />} />
    <Route path="/cssfour" element={<CssFour />} />
    <Route path="/cssfive" element={<CssFive />} />
    <Route path="/jsone" element={<HeartAnimation />} />
    <Route path="/javascript" element={<JavaScriptMain />} />
   
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

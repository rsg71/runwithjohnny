import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';


import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import 'animate.css';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <NavigationBar />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>


        </ScrollToTop>
        <Footer />
      </Router>

    </>
  );
}

export default App;

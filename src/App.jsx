import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss'
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Contact from './components/Contact';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const News = lazy(() => import('./pages/News'));

const App = () => {
  return (
    <Router>
      <div className='d-flex row pt-5 mx-0 cstm-bg-main'>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Suspense>
        <Contact />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
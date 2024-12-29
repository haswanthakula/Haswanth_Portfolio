import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Home />
      <Header />  
      <About /> 
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />  
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

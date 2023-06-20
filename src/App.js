import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills'


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      {/* <Skills /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;

import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
// import Skills from './components/Skills'
import { useEffect, useState } from 'react';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading 
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading')
  }, [loading]);

  return (
    // <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loading setLoading={setLoading} />
          </motion.div>
        ) : (
          <div>
            <Navbar />
            <Banner />
            <About />
            {/* <Skills /> */}
            {/* <Contact /> */}
            <Footer />
          </div>
        )}
        
      </AnimatePresence>
    // </AnimateSharedLayout>
  );
}

export default App;

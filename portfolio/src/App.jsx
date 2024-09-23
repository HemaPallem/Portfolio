import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header/>
    <Hero />
    <Aboutme />
    <Skills />
    <Projects/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;

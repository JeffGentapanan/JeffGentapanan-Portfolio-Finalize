import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Plasma from './Plasma';
import './index.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative', backgroundColor: '#000' }}>
      
      {/* ?Background Plasma Layer */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1,
        backgroundColor: '#000'
       }}>
       <Plasma 
        color="#ffffff"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={false}
       />
      </div>
      <Header />
      <main className="main-content">
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
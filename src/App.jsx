import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
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
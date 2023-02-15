import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Acheivment from './Components/Acheivments/Acheivments';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Home/>
      </main>
      <About id="about"/>

      <Experience/>
      <Acheivment/>
      <Skills/>
      <Projects/>
      <Contact/>
      <footer>
        <Footer/>
      </footer>
          </div>
  );
}

export default App;

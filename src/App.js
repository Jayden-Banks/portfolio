import './App.css';
import Header from './components/Header'
import About from './components/About'
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <SkillSet />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

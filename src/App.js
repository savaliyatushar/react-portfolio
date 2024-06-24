import './App.css';
import Aboutme from './Components/Aboutme/Aboutme';
import About from './Components/Abouts/About';
import Footers from './Components/Footers/Footers';
import Header from './Components/Headers/Header';
import Navbars from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
  
function App() {
  return (
    <div className="App">
      <Navbars/>
      <Header/>
      <About/>
      <Aboutme/>
      <Skills/>
      <Footers/>
    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import NavBar from './components/NavBar';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SobreMim/>
      <Habilidades/>
      <Projetos/>
      <Contato/>
      
     
    </div>
  );
}

export default App;

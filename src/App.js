import "./App.css";
import Home from "./pages/Home";
import SobreMim from "./pages/SobreMim";
import NavBar from "./components/NavBar";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="sobre">
        <SobreMim />
      </section>
      <section id="habilidades">
        <Habilidades />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
      <section id="contatos">
        <Contato />
      </section>
    </div>
  );
}

export default App;

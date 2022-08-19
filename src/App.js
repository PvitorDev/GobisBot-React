import "./App.css";
import Card from "./components/Card";
import Social from "./components/Social";
function App() {
  return (
    <div className="ok">
      <Social />
      <div className="header">
        <h1>Rádio Gobis BOT</h1>
        <p>Clique no card para adicionar</p>
        <p>O melhor bot de musica no seu discord!</p>
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
}

export default App;

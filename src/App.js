import "./App.css";
import Card from "./components/Card";
import Social from "./components/Social";
function App() {
  return (
    <div>
      <div className="header">
        <h1>Rádio Gobis BOT</h1>
      </div>
      <div className="cards">
        <Card />
      </div>

      <Social />
    </div>
  );
}

export default App;

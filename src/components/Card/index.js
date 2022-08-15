import "./styles.css";
import gobis from "../../assets/gobis.jpg";
import music from "../../assets/music.png";
import robo from "../../assets/robo.png";
function redirect() {
  window.location.href =
    "https://discord.com/api/oauth2/authorize?client_id=967256110740410418&permissions=8&scope=bot%20applications.commands";
}
export default function Card() {
  return (
    <div className="card" onClick={() => redirect()}>
      <img src={gobis} alt="Gobis" />
      <div className="title">
        <h2>
          Rádio Gobis Bot <img id="music" src={music} alt="icon music" />{" "}
          <img id="music" src={robo} alt="icon music" />
        </h2>
      </div>
    </div>
  );
}

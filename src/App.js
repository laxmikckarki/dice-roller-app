import "./App.css";
import { useState } from "react";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceNumber2, setDiceNumber2] = useState(2);

  const refreshDice = () => {
    const ranno = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(ranno);
    const ranno2 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber2(ranno2);
  };
  return (
    <div>
      <img
        alt="dice"
        width={300}
        height={300}
        src={require(`./assets/${diceNumber}.png`)}
      ></img>
      <img
        alt="dice"
        width={300}
        height={300}
        src={require(`./assets/${diceNumber2}.png`)}
      ></img>
      <br />
      <button onClick={() => refreshDice()} className="button">
        Roll
      </button>
    </div>
  );
};

export default App;

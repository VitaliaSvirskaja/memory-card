import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Scoreboard } from "./components/Scoreboard";
import { MemoryBoard } from "./components/Memory-board";

function App() {
  const [score, setScore] = useState<number>(0);
  const [highscore, setHighscore] = useState<number>(0);
  const [clickedMemoryCards, setClickedMemoryCards] = useState<Array<string>>(
    []
  );

  function handleValidClick() {
    setScore(score + 1);
  }

  function handleInvalidClick() {
    if (score > highscore) {
      setHighscore(score);
      setScore(0);
    } else {
      setScore(0);
    }
    setClickedMemoryCards([]);
  }

  return (
    <div className="App">
      <Scoreboard
        score={score}
        highScore={highscore}
        setScore={setScore}
        setHighScore={setHighscore}
      />
      <MemoryBoard
        onMemoryCardClick={handleValidClick}
        onMemoryCardDoubleCLick={handleInvalidClick}
        clickedMemoryCards={clickedMemoryCards}
        setClickedMemoryCards={setClickedMemoryCards}
      />
    </div>
  );
}

export default App;

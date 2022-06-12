import { useEffect, useState } from "react";
import "../styles/scoreboard.css";

interface Props {
  score: number;
  setScore: (score: number) => void;
  highScore: number;
  setHighScore: (highScore: number) => void;
}

export const Scoreboard = (props: Props) => {
  useEffect(() => {
    if (props.score === 10) {
      props.setHighScore(10);
      props.setScore(0);
    }
  }, [props.score]);

  return (
    <div>
      <h3>Memory Card with Fruits</h3>
      <div className="scoreboard">
        <p>Score: {props.score}</p>
        <p>Highscore: {props.highScore}</p>
      </div>
    </div>
  );
};

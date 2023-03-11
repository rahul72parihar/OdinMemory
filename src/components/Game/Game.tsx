import React from "react";
import { imageObjArray } from "../../assets";
import "./Game.css";

function Game() {
  const [imageArray, setImageArray] = React.useState(imageObjArray);
  const [highScore, setHighScore] = React.useState(0);
  const [currScore, setCurrScore] = React.useState(0);
  const [visited, setVisited] = React.useState(new Set());

  const handleClick = (name: string) => {
    shuffleArray();
    if (visited.has(name)) found();
    else notFound(name);
  };

  const found = () => {
    setCurrScore(0);
    setVisited(new Set());
  };

  const notFound = (name: string) => {
    setCurrScore((prev) => prev + 1);
    setHighScore(Math.max(currScore + 1, highScore));
    setVisited((prevSet) => {
      const newSet = prevSet;
      newSet.add(name);
      return newSet;
    });
  };

  const shuffleArray = () => {
    setImageArray(
      (
        prevArray: {
          src: string;
          name: string;
        }[]
      ) => {
        prevArray.sort(() => Math.random() - 0.5);
        return prevArray;
      }
    );
  };
  return (
    <>
      <div className="scoreDiv">
        <h2>Current Score : {currScore}</h2>
        <h2>High Score : {highScore}</h2>
      </div>
      <div className="game">
        {imageArray.map((curr) => {
          return (
            <img
              key={curr.name}
              src={curr.src}
              alt={`image of ${curr.name}`}
              onClick={() => handleClick(curr.name)}
            />
          );
        })}
      </div>
    </>
  );
}
export default Game;

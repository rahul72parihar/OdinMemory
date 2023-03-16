import React from "react";
import { imageObjArray } from "../../assets";
import "./Game.css";

function Game() {
  // STATES ALPHABETICALLY SORTED
  const [currScore, setCurrScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const [imageArray, setImageArray] = React.useState(imageObjArray);
  const [visited, setVisited] = React.useState(new Set());
  //Click on Image
  const handleClick = (name: string) => {
    shuffleArray();
    if (visited.has(name)) found();
    else notFound(name);
  };
  // SHUFFLE ARRAY AFTER CLICK ON CARD
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
  // IF CARD FOUND ON SET
  const found = () => {
    resetScore();
  };
  const resetScore = () => {
    setCurrScore(0);
    setVisited(new Set());
  };
  // IF NOT FOUND IN VISITED SET
  const notFound = (name: string) => {
    updateScore();
    addToVisitedSet(name);
  };
  const addToVisitedSet = (name: string) => {
    setVisited((prevSet) => {
      const newSet = prevSet;
      newSet.add(name);
      return newSet;
    });
  };
  const updateScore = () => {
    setCurrScore((prev) => prev + 1);
    setHighScore(Math.max(currScore + 1, highScore));
  };
  // RENDER IMAGE
  // Takes src and name as parameter
  const renderImage = (name: string, src: string) => {
    return (
      <img
        className="card"
        key={name}
        src={src}
        alt={`image of ${name}`}
        onClick={() => handleClick(name)}
      />
    );
  };
  return (
    <>
      <div className="score-div">
        <h2>Current Score : {currScore}</h2>
        <h2>High Score : {highScore}</h2>
      </div>
      <div className="cards-div">
        {imageArray.map((curr) => renderImage(curr.name, curr.src))}
      </div>
    </>
  );
}
export default Game;

import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const game = useSelector((state) => state.game);
  const badStyle = {
    background: "red",
    fill: "solid",
    width: "200px",
    textAlign: "left",
  };

  const noStyle = {
    fill: "solid",
    width: "200px",
    textAlign: "left",
  };

  const goodStyle = {
    background: "lime",
    fill: "solid",
    width: "200px",
    textAlign: "left",
  };

  let lifeStyle = noStyle;
  if (game.lifeStatus === "RED") {
    lifeStyle = badStyle;
  }
  if (game.lifeStatus === "GREEN") {
    lifeStyle = goodStyle;
  }

  let scoreStyle = noStyle;
  if (game.scoreStatus === "RED") {
    scoreStyle = badStyle;
  }
  if (game.scoreStatus === "GREEN") {
    scoreStyle = goodStyle;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={noStyle}>Level {game.level}</td>
            <td style={noStyle}>Zone: {game.stages[game.stage].name}</td>
          </tr>
          <tr>
            <td style={lifeStyle}>Health: {game.playerLife}</td>
            <td style={scoreStyle}>Score: {game.score}</td>
            <td style={noStyle}></td>
            <td style={noStyle}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;

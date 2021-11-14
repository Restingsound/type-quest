import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Header from "./Header";
import Baddie from "./Baddie";
import PlayerInput from "./PlayerInput";
import HandDisplay from "./HandDisplay";
import ChoiceButton from "./ChoiceButton";
import { setGameState, startNewGame } from "../reducers/gameReducer";

const GameScreen = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);

  const startGame = () => {
    dispatch(startNewGame());
  };

  useEffect(() => {
    if (game.playerStatus === "DEAD" && game.gameState === "PLAYING") {
      dispatch(setGameState("GAME_OVER"));
    }
  });

  const gameEndContainerStyle = {
    height: 325,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const instructionsStyle = {
    display: "fixed",
    textAlign: "left",
  };

  if (game.gameState === "INIT") {
    return (
      <div style={gameEndContainerStyle}>
        <div>
          <div style={instructionsStyle}>
            Type the names of your cards on the bottom of the screen to use
            them. <br />
            Every time you use a card a new one will be drawn from your deck.
            <br />
            Deck is shuffled from discard pile when empty.
            <br />
            <br />
            Monsters will attack every time their orange bar fills up.
            <br />
            <br />
            Add cards to your deck or powerful relics after each stage.
            <br />
            <br />
            If your health drops to 0 you lose.
            <br />
            <br />
            Complete 5 Levels to reach the boss.
            <br />
            <br />
          </div>
          <Button variant="contained" onClick={startGame} size="small">
            Start
          </Button>
        </div>
      </div>
    );
  }

  const optionChoiceStyle = {
    height: 120,
    width: 150,
  };

  if (game.gameState === "PLAYING") {
    return (
      <div>
        <Header />
        <table width="100%">
          <tbody>
            <tr>
              <td width="200px">
                <PlayerInput />
              </td>
              <td width="2%"></td>
              <td>
                <Baddie id="0" />
              </td>
              <td>
                <Baddie id="1" />
              </td>
              <td>
                <Baddie id="2" />
              </td>
              <td>
                <Baddie id="3" />
              </td>
            </tr>
          </tbody>
        </table>
        <HandDisplay />
      </div>
    );
  }

  if (game.gameState === "BETWEEN_LEVELS") {
    return (
      <div>
        <Header />
        <table width="100%">
          <tbody>
            <tr>
              <td style={optionChoiceStyle}>Select Next Level</td>
              <td width="10%"></td>
              <td>
                <ChoiceButton id="0" />
              </td>
              <td>
                <ChoiceButton id="1" />
              </td>
              <td>
                <ChoiceButton id="2" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (game.gameState === "BEFORE_BOSS") {
    return (
      <div>
        <Header />
        <table width="100%">
          <tbody>
            <tr>
              <td style={optionChoiceStyle}>
                Prepare to face the ultimate challenge
              </td>
              <td width="10%"></td>
              <td>
                <ChoiceButton id="0" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (game.gameState === "CARD_REWARD_CHOICE") {
    return (
      <div>
        <Header />
        <table width="100%">
          <tbody>
            <tr>
              <td style={optionChoiceStyle}>
                Select a card to add to your deck.
              </td>
              <td width="10%"></td>
              <td>
                <ChoiceButton id="0" />
              </td>
              <td>
                <ChoiceButton id="1" />
              </td>
              <td>
                <ChoiceButton id="2" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (game.gameState === "RELIC_REWARD_CHOICE") {
    return (
      <div>
        <Header />
        <table width="100%">
          <tbody>
            <tr>
              <td style={optionChoiceStyle}>Select a relic to empower you.</td>
              <td width="10%"></td>
              <td>
                <ChoiceButton id="0" />
              </td>
              <td>
                <ChoiceButton id="1" />
              </td>
              <td>
                <ChoiceButton id="2" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (game.gameState === "GAME_OVER") {
    return (
      <div style={gameEndContainerStyle}>
        <div>
          You were killed by a {game.lastAttackName}
          <br />
          <br />
          Score = {game.score} Game Over.
          <br /> <br />
          <Button variant="contained" onClick={startGame} size="small">
            Play Again?
          </Button>
        </div>
      </div>
    );
  }

  if (game.gameState === "VICTORY") {
    return (
      <div style={gameEndContainerStyle}>
        <div>
          You beat the game!
          <br />
          <br />
          Thanks for playing.
          <br />
          <br />
          Final Score = {game.score}
          <br /> <br />
          <Button variant="contained" onClick={startGame} size="small">
            Play Again?
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      Initializing...
    </div>
  );
};

export default GameScreen;

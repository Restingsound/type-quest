import React, { useState } from "react";

import GameScreen from "./components/GameScreen";
import { useDispatch } from "react-redux";
import {
  tickAttack,
  tickLevel,
  tickPlayer,
  pauseGame,
} from "./reducers/gameReducer";

import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const pauseIcon = "images/Pause-icon.png";
const playIcon = "images/Play-icon.png";

const App = () => {
  const [tickTimer, setTimer] = useState(0);
  const [paused, setPaused] = useState(false);

  const dispatch = useDispatch();
  const tickFunction = () => {
    dispatch(tickAttack());
    dispatch(tickPlayer());
    dispatch(tickLevel());
  };

  if (tickTimer === 0) {
    setTimer(setInterval(tickFunction, 100));
  }

  const pauseClicked = () => {
    if (paused === false) {
      setPaused(true);
      clearInterval(tickTimer);
      dispatch(pauseGame(true));
    } else {
      setPaused(false);
      setTimer(setInterval(tickFunction, 100));
      dispatch(pauseGame(false));
    }
  };

  const PauseDisplay = () => {
    if (paused === false) {
      return (
        <PauseContainer>
          <ButtonFrame focusRipple key="Pause" onClick={pauseClicked}>
            <PauseImageSrc />
          </ButtonFrame>
        </PauseContainer>
      );
    } else {
      return (
        <PauseContainer>
          <ButtonFrame focusRipple key="Pause" onClick={pauseClicked}>
            <PlayImageSrc />
          </ButtonFrame>
        </PauseContainer>
      );
    }
  };

  const PauseContainer = styled("span")({
    position: "absolute",
    top: 0,
    right: 0,
  });

  const TitleContainer = styled("span")({
    display: "block",
    margin: "auto",
  });

  const TopContainer = styled("div")({
    position: "relative",
    top: 0,
  });

  const ButtonFrame = styled(ButtonBase)(({ theme }) => ({
    height: 32,
    width: 32,
  }));

  const PauseImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundImage: `url(${pauseIcon})`,
  });

  const PlayImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 32,
    width: 32,
    backgroundSize: "cover",
    backgroundImage: `url(${playIcon})`,
  });

  return (
    <div>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          minWidth: 800,
          maxWidth: 800,
          minHeight: 500,
          backgroundColor: "lightgray",
          justifyContent: "center",
          fontFamily: "arial",
          textAlign: "center",
          border: 3,
          borderRadius: 2,
          padding: 1,
        }}
      >
        <TopContainer>
          <TitleContainer>
            <h2>React Type Quest</h2>
          </TitleContainer>

          <PauseDisplay />
        </TopContainer>
        <GameScreen />
      </Container>
    </div>
  );
};

export default App;

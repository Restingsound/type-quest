import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAttack, applyDamage } from "../reducers/gameReducer";
import Container from "@mui/material/Container";

const swordIcon = "images/sword.png";

const Baddie = (id) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const idText = id.id;

  const nameContainerStyle = {
    border: "none",
    padding: 0,
    margin: 0,
    borderWidth: 0,
    fill: "solid",
    width: "100px",
    position: "relative",
  };

  const nameDyingStyle = {
    background: "gray",
    fill: "solid",
    width: "100px",
    border: "none",
    padding: 0,
    fontWeight: "bold",
    marginTop: 18,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const nameStyle = {
    width: "100px",
    fontWeight: "bold",
    padding: 0,
    marginTop: 18,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const nameBlackBarStyle = {
    padding: 0,
    borderWidth: 0,
    border: "none",
    background: "black",
    width: 100,
    position: "absolute",
    top: 0,
    height: 2,
  };
  const hpBarContainerStyle = {
    border: "none",
    padding: 0,
    margin: 0,
    borderWidth: 0,
    fill: "solid",
    width: "100px",
    position: "relative",
  };
  const hpBarStyle = {
    padding: 0,
    borderWidth: 0,
    border: "none",
    background: "red",
    width: `${game.monsterHPPer[idText]}%`,
    position: "absolute",
    height: 16,
  };

  const hpBlackBarStyle = {
    padding: 0,
    borderWidth: 0,
    border: "none",
    background: "black",
    width: 100,
    position: "absolute",
    top: 16,
    height: 3,
  };
  const hpTextStyle = {
    width: "100px",
    fontWeight: "bold",
    position: "absolute",
    border: "solid",
    padding: 0,
    borderWidth: 0,
    fontSize: 12,
  };

  const imageContainerStyle = {
    paddingTop: 0,
    top: 18,
    width: "100px",
    height: "50px",
    border: "none",
    padding: 0,
    borderWidth: 1,
    fill: "solid",
    position: "relative",
    background: "orange",
  };
  const imageBackgroundStyle = {
    paddingTop: 0,
    top: 22,
    width: "100px",
    background: "white",
    height: `${game.attackPercent[idText]}%`,
  };

  const blankStyle = {
    border: "none",
    padding: 0,
    borderWidth: 1,
    fill: "solid",
    width: "100px",
  };

  const NameDisplay = () => {
    if (game.status[idText] === "ALIVE") {
      return (
        <div style={nameContainerStyle}>
          <div style={nameBlackBarStyle}>&nbsp;</div>
          <div style={nameStyle}>{game.monName[idText]}</div>
        </div>
      );
    } else if (game.status[idText] === "DYING") {
      return (
        <div style={nameContainerStyle}>
          <div style={nameBlackBarStyle}>&nbsp;</div>
          <div style={nameDyingStyle}>{game.monName[idText]}</div>
        </div>
      );
    }
  };

  useEffect(() => {
    if (
      game.attackCurrentTicks[idText] === 0 &&
      game.status[idText] === "ALIVE"
    ) {
      if (game.playerLife > 0) {
        dispatch(applyDamage(game.damage[idText]));
        dispatch(setAttack(idText, game.attackStartTicks[idText]));
      }
    }
  });
  if (game.status[idText] === "ALIVE" || game.status[idText] === "DYING") {
    return (
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          minWidth: 104,
          maxWidth: 104,
          minHeight: 120,
          backgroundColor: "white",
          border: 2,
          borderRadius: 1,
          padding: 0,
        }}
      >
        <div style={hpBarContainerStyle}>
          <div style={hpBarStyle}>&nbsp;</div>
          <div style={hpTextStyle}>{game.monsterHP[idText]}</div>
          <div style={hpBlackBarStyle}>&nbsp;</div>
        </div>
        <div style={imageContainerStyle}>
          <div style={imageBackgroundStyle}>
            <img src={swordIcon} alt="baddie" height="50px"></img>
          </div>
        </div>
        <NameDisplay />
      </Container>
    );
  } else {
    return (
      <div>
        <div style={blankStyle}>&nbsp;</div>
      </div>
    );
  }
};

export default Baddie;

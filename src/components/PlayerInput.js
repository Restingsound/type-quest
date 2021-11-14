import { TextField } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { castCard } from "../reducers/gameReducer";

const PlayerInput = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const handleChange = (event) => {
    let matchFound = false;
    for (let x = 0; x < game.handSize; x++) {
      const cardDetails = game.commands.filter(
        (card) => card.id === game.hand[x]
      )[0];
      if (
        event.target.value === cardDetails.name &&
        cardDetails.name !== "" &&
        game.playerLife > 0 &&
        matchFound === false
      ) {
        matchFound = true;
        dispatch(castCard(x));
      }
    }
    if (matchFound) {
      event.target.value = "";
    }
  };

  const playerInputStyle = {
    height: 120,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const inputRef = useRef();

  useEffect(() => {
    // current property is refered to input element
    if (game.paused === false && inputRef.current !== undefined) {
      inputRef.current.focus();
    }
    if (game.paused === true && inputRef.current !== undefined) {
      inputRef.current.value = "";
    }
  });

  return (
    <div style={playerInputStyle}>
      <TextField
        label="Type Card Name"
        variant="outlined"
        autoComplete="off"
        autoFocus
        name="playerDataEntry"
        onChange={handleChange}
        disabled={game.paused}
        inputRef={inputRef}
        fullWidth
      />
    </div>
  );
};

export default PlayerInput;

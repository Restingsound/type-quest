import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseOption } from "../reducers/gameReducer";
import UnstyledButtonCustom from "./UnstyledButtonCustom";

const ChoiceButton = (id) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const idText = id.id;

  const chooseOptionClicked = (event) => {
    dispatch(chooseOption(event.target.id));
  };

  if (game.gameState === "CARD_REWARD_CHOICE") {
    return (
      <div>
        <UnstyledButtonCustom
          onClick={chooseOptionClicked}
          id={game.optionList[idText].id}
        >
          <b>{game.optionList[idText].name}</b>
          <br />
          <br />
          {game.optionList[idText].longText}
        </UnstyledButtonCustom>
      </div>
    );
  }

  if (game.gameState === "BETWEEN_LEVELS") {
    return (
      <div>
        <UnstyledButtonCustom
          onClick={chooseOptionClicked}
          id={game.optionList[idText].id}
        >
          <b>{game.optionList[idText].name}</b>
          <br />
          <br />
          {game.optionList[idText].longText}
          <br />
          <br />
          <b>Reward: </b>
          {game.optionList[idText].reward}
        </UnstyledButtonCustom>
      </div>
    );
  }

  if (game.gameState === "RELIC_REWARD_CHOICE") {
    return (
      <div>
        <UnstyledButtonCustom
          onClick={chooseOptionClicked}
          id={game.optionList[idText].id}
        >
          {game.optionList[idText].name}
          <br />
          <br />
          {game.optionList[idText].longText}
        </UnstyledButtonCustom>
      </div>
    );
  }

  if (game.gameState === "BEFORE_BOSS") {
    return (
      <div>
        <UnstyledButtonCustom
          onClick={chooseOptionClicked}
          id={game.optionList[idText].id}
        >
          {game.optionList[idText].name}
          <br />
          <br />
          {game.optionList[idText].longText}
          <br />
          <br />
          Reward: {game.optionList[idText].reward}
        </UnstyledButtonCustom>
      </div>
    );
  }
};

export default ChoiceButton;

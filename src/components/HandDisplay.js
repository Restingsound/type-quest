import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

const HandDisplay = () => {
  const gameState = useSelector((state) => state.game);

  const cardBorder = {
    border: "solid",
    borderWidth: 3,
    borderRadius: 5,
    background: "#c7ede8",
    fill: "solid",
    width: "150px",
    height: "100px",
  };

  const cardTitle = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const blackBarStyle = {
    padding: 0,
    borderWidth: 0,
    border: "none",
    background: "black",
    width: 146,
    position: "relative",
    top: 0,
    height: 2,
  };

  const cardText = {
    padding: 4,
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        minWidth: 800,
        maxWidth: 800,
        minHeight: 200,
        border: 0,
        borderRadius: 0,
        padding: 0,
      }}
    >
      <Stack direction="row" spacing={2}>
        {gameState.hand.map((cardId, index) => (
          <div key={index}>
            <div style={cardBorder}>
              <div style={cardTitle}>
                {
                  gameState.commands.filter((card) => card.id === cardId)[0]
                    .name
                }
              </div>
              <div style={blackBarStyle}>&nbsp;</div>
              <div style={cardText}>
                {
                  gameState.commands.filter((card) => card.id === cardId)[0]
                    .longText
                }
                &nbsp;
                <b>
                  {
                    gameState.commands.filter((card) => card.id === cardId)[0]
                      .damage
                  }
                </b>
                &nbsp;damage.
              </div>
            </div>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default HandDisplay;

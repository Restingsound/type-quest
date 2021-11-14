const gameDataAtStart = {
  playerLife: 100,
  score: 0,
  lifeStatus: "STABLE",
  scoreStatus: "STABLE",
  lifeChangeCurrentTick: 0,
  lifeChangeStartTick: 3,
  scoreChangeStartTick: 3,
  scoreChangeCurrentTick: 0,
  playerStatus: "INIT",
  monName: ["", "", "", ""],
  attackSpeed: [1, 1, 1, 1],
  attackStartTicks: [50, 50, 50, 50],
  attackCurrentTicks: [50, 50, 50, 50],
  attackPercent: [0, 0, 0, 0],
  monsterHP: [0, 0, 0, 0],
  monsterHPMax: [0, 0, 0, 0],
  monsterHPPer: [0, 0, 0, 0],
  dyingStartTicks: 15,
  dyingCurrentTicks: [15, 15, 15, 15],
  status: ["DEAD", "DEAD", "DEAD", "DEAD"],
  damage: [0, 0, 0, 0],
  level: 1,
  stage: 1,
  stageKills: 0,
  stages: [
    {
      id: 0,
      name: "Peaceful Village",
      longText: "Clear out the monsters pestering this little village.",
      killTarget: 5,
      tier: 0,
      reward: "CARD",
      monsters: [
        { name: "rat", attackSpeed: 0.5, damage: 20, hp: 5 },
        { name: "slime", attackSpeed: 0.5, damage: 15, hp: 10 },
        { name: "goblin", attackSpeed: 0.5, damage: 25, hp: 19 },
      ],
    },
    {
      id: 1,
      name: "Snow Level",
      longText: "More dangerous monsters in the icy North.",
      killTarget: 5,
      tier: 0,
      reward: "CARD",
      monsters: [
        { name: "Snowman", attackSpeed: 1, damage: 25, hp: 6 },
        { name: "Ice Sculptor", attackSpeed: 1, damage: 20, hp: 15 },
        { name: "Yeti", attackSpeed: 1, damage: 30, hp: 45 },
      ],
    },
    {
      id: 2,
      name: "Space Level",
      longText: "Launch into space and explore new frontiers",
      killTarget: 5,
      tier: 0,
      reward: "CARD",
      monsters: [
        { name: "Asteroid", attackSpeed: 1, damage: 25, hp: 34 },
        { name: "Space Marine", attackSpeed: 1, damage: 20, hp: 86 },
        { name: "Alien", attackSpeed: 1, damage: 30, hp: 68 },
      ],
    },
    {
      id: 3,
      name: "Underwater Level",
      longText: "Monsters are better, down where its wetter, under the sea.",
      killTarget: 5,
      tier: 0,
      reward: "RELIC",
      monsters: [
        { name: "Shark", attackSpeed: 1, damage: 25, hp: 40 },
        { name: "Mermaid", attackSpeed: 1, damage: 20, hp: 33 },
        { name: "Real Big Crab", attackSpeed: 1, damage: 30, hp: 26 },
      ],
    },
    {
      id: 4,
      name: "Boss Level",
      longText: "Fight the big boss to win the game.",
      killTarget: 1,
      tier: 1,
      reward: "VICTORY",
      monsters: [
        { name: "Sentient React App", attackSpeed: 2, damage: 25, hp: 150 },
      ],
    },
  ],
  gameState: "INIT",
  monsterSpawnRate: 30,
  monsterSpawnCurrent: 30,
  lastAttackName: "rat",
  optionList: [
    { name: "", longText: "", id: 0, reward: "" },
    { name: "", longText: "", id: 0, reward: "" },
    { name: "", longText: "", id: 0, reward: "" },
  ],
  commands: [],
  relics: [],
  deck: [],
  hand: [],
  discard: [],
  handSize: 4,
  paused: false,
};

const startingCommands = [
  {
    id: 0,
    name: "strike",
    damage: 20,
    damageType: "FIRST",
    longText: "Hit the first enemy for",
  },
  {
    id: 1,
    name: "shoot",
    damage: 20,
    damageType: "LAST",
    longText: "Hit the last enemy for",
  },
  {
    id: 2,
    name: "blast",
    damage: 5,
    damageType: "ALL",
    longText: "Hit the all enemies for",
  },
];

const allCommands = [
  {
    id: 0,
    name: "strike",
    damage: 20,
    damageType: "FIRST",
    longText: "Hit the first enemy for",
  },
  {
    id: 1,
    name: "shoot",
    damage: 20,
    damageType: "LAST",
    longText: "Hit the last enemy for",
  },
  {
    id: 2,
    name: "blast",
    damage: 5,
    damageType: "ALL",
    longText: "Hit the all enemies for",
  },
  {
    id: 3,
    name: "giga blast",
    damage: 40,
    damageType: "ALL",
    longText: "Hit the all enemies for",
  },
  {
    id: 4,
    name: "execute",
    damage: 80,
    damageType: "FIRST",
    longText: "Hit the first enemy for",
  },
  {
    id: 5,
    name: "precise shot",
    damage: 80,
    damageType: "LAST",
    longText: "Hit the last enemy for",
  },
  {
    id: 6,
    name: "wide slash",
    damage: 20,
    damageType: "ALL",
    longText: "Hit the all enemies for",
  },
  {
    id: 7,
    name: "punch",
    damage: 3,
    damageType: "FIRST",
    longText: "Hit the first enemy for",
  },
];

const allRelics = [
  {
    id: 0,
    name: "Big Sword",
    damage: 20,
    type: "FIRST",
    longText: "Increase damage to first enemy attacks by 20",
  },
  {
    id: 1,
    name: "Big Gun",
    damage: 20,
    type: "LAST",
    longText: "Increase damage to last enemy attacks by 20",
  },
  {
    id: 2,
    name: "Dynamite",
    damage: 20,
    type: "ALL",
    longText: "Increase damage to all enemy attacks by 20",
  },
  {
    id: 3,
    name: "Re-Qwerty",
    damage: 0,
    type: "REQWERTY",
    longText: "Reverse all Commands, Double all damage",
  },
];

const bossLevel = 5;
const initialState = gameDataAtStart;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const reducer = (state = initialState, action) => {
  const game = state;
  let newBaddies = state;
  let newDyingCurrentTicks = [...game.dyingCurrentTicks];
  let newAttackCurrentTicks = [...game.attackCurrentTicks];
  let newPercent = [...game.attackPercent];
  let newMonName = [...game.monName];
  let newNamePointer = game.namePointer;
  let newStatus = [...game.status];
  let newMonsterSpawnCurrent = game.monsterSpawnCurrent;
  let newAttackSpeed = [...game.attackSpeed];
  let newDamage = [...game.damage];
  let newLevel = game.level;
  let newStage = game.stage;
  let newStageKills = game.stageKills;
  let newGameState = game.gameState;
  let newOptions = [...game.optionList];
  let newDeck = [...game.deck];
  let newHand = [...game.hand];
  let newDiscard = [...game.discard];
  let newHandSize = game.handSize;
  let newMonsterHP = [...game.monsterHP];
  let newMonsterHPMax = [...game.monsterHPMax];
  let newMonsterHPPer = [...game.monsterHPPer];
  let newCommands = JSON.parse(JSON.stringify(game.commands));
  let newScore = game.score;
  let newScoreStatus = game.scoreStatus;
  let newLifeStatus = game.lifeStatus;
  let newLifeChangeCurrentTick = game.lifeChangeCurrentTick;
  let newScoreChangeCurrentTick = game.scoreChangeCurrentTick;
  let newPlayerLife = game.playerLife;
  let newPlayerStatus = game.playerStatus;
  let newRelics = [...game.relics];

  switch (action.type) {
    case "SET_ATTACK_TIMER":
      newAttackCurrentTicks[action.data.id] = action.data.number;
      newPercent[action.data.id] = 100;
      return {
        ...state,
        attackCurrentTicks: newAttackCurrentTicks,
        attackPercent: newPercent,
        lastAttackName: game.monName[action.data.id],
      };

    case "START_NEW_GAME":
      newDeck = [0, 0, 0, 1, 1, 1, 2, 2, 2];
      newDeck = shuffle(newDeck);
      newCommands = JSON.parse(JSON.stringify(startingCommands));
      return {
        ...state,
        monName: ["", "", "", ""],
        attackSpeed: [1, 1, 1, 1],
        attackCurrentTicks: [50, 50, 50, 50],
        attackPercent: [100, 100, 100, 100],
        dyingCurrentTicks: [15, 15, 15, 15],
        status: ["DEAD", "DEAD", "DEAD", "DEAD"],
        damage: [20, 20, 20, 20],
        stage: 0,
        stageKills: 0,
        monsterSpawnRate: 30,
        monsterSpawnCurrent: 5,
        gameState: "PLAYING",
        deck: newDeck,
        hand: [],
        discard: [],
        handSize: 4,
        playerLife: 100,
        score: 0,
        lifeStatus: "STABLE",
        scoreStatus: "STABLE",
        lifeChangeCurrentTick: 0,
        scoreChangeCurrentTick: 0,
        playerStatus: "ALIVE",
        level: 0,
        paused: false,
        commands: newCommands,
        relics: [],
      };

    case "PAUSE_GAME":
      return {
        ...state,
        paused: action.data.paused,
      };

    case "TICK_PLAYER":
      if (newLifeStatus !== "STABLE") {
        if (game.playerLife > 0) {
          newLifeChangeCurrentTick -= 1;
        }
        if (newLifeChangeCurrentTick <= 0) {
          newLifeStatus = "STABLE";
        }
      }

      if (newScoreStatus !== "STABLE") {
        newScoreChangeCurrentTick -= 1;
        if (newScoreChangeCurrentTick <= 0) {
          newScoreStatus = "STABLE";
        }
      }

      return {
        ...state,
        scoreStatus: newScoreStatus,
        lifeStatus: newLifeStatus,
        lifeChangeCurrentTick: newLifeChangeCurrentTick,
        scoreChangeCurrentTick: newScoreChangeCurrentTick,
      };

    case "TICK_BADDIES":
      if (game.gameState === "PLAYING") {
        for (let x = 0; x < 4; x++) {
          if (game.status[x] === "ALIVE") {
            newAttackCurrentTicks[x] -= game.attackSpeed[x];
            if (newAttackCurrentTicks[x] < 0) {
              newAttackCurrentTicks[x] = 0;
            }
            newPercent[x] =
              (newAttackCurrentTicks[x] / game.attackStartTicks[x]) * 100;
          } else if (game.status[x] === "DYING") {
            newDyingCurrentTicks[x] -= 1;
            console.log(newDyingCurrentTicks[x]);
            if (newDyingCurrentTicks[x] <= 0) {
              newStatus[x] = "DEAD";
              for (let y = x + 1; y < 4; y++) {
                if (newStatus[y] !== "DEAD") {
                  newAttackCurrentTicks[y - 1] = newAttackCurrentTicks[y];
                  newDyingCurrentTicks[y - 1] = newDyingCurrentTicks[y];
                  newPercent[y - 1] = newPercent[y];
                  newMonName[y - 1] = newMonName[y];
                  newStatus[y - 1] = newStatus[y];
                  newMonsterHP[y - 1] = newMonsterHP[y];
                  newMonsterHPMax[y - 1] = newMonsterHPMax[y];
                  newMonsterHPPer[y - 1] = newMonsterHPPer[y];
                  newAttackSpeed[y - 1] = newAttackSpeed[y];
                  newDamage[y - 1] = newDamage[y];
                  newStatus[y] = "DEAD";
                }
              }
            }
          }
        }
      }
      newBaddies = {
        ...state,
        dyingCurrentTicks: newDyingCurrentTicks,
        attackCurrentTicks: newAttackCurrentTicks,
        attackPercent: newPercent,
        monName: newMonName,
        namePointer: newNamePointer,
        status: newStatus,
        monsterHP: newMonsterHP,
        monsterHPMax: newMonsterHPMax,
        monsterHPPer: newMonsterHPPer,
        damage: newDamage,
        attackSpeed: newAttackSpeed,
      };
      return newBaddies;

    case "TICK_LEVEL":
      if (game.gameState === "PLAYING") {
        while (newHand.length < newHandSize) {
          if (newDeck.length === 0) {
            newDeck = shuffle([...newDiscard]);
            newDiscard = [];
          }
          newHand.push(newDeck.pop());
        }

        let aliveBaddies = 0;
        let firstOpenSpot = -1;
        for (let x = 0; x < 4; x++) {
          if (game.status[x] !== "DEAD") {
            aliveBaddies += 1;
          } else {
            if (firstOpenSpot === -1) {
              firstOpenSpot = x;
            }
          }
        }
        if (
          (aliveBaddies < 1 && game.level === bossLevel) ||
          (aliveBaddies < 4 && game.level !== bossLevel)
        ) {
          newMonsterSpawnCurrent -= 1;
          if (newMonsterSpawnCurrent <= 0) {
            newMonsterSpawnCurrent = game.monsterSpawnRate;
            //select new monster
            const monNum = Math.floor(
              Math.random() * game.stages[newStage].monsters.length
            );
            const newMon = game.stages[newStage].monsters[monNum];

            //place monster at position aliveBaddies
            newAttackCurrentTicks[firstOpenSpot] =
              game.attackStartTicks[firstOpenSpot];
            newPercent[firstOpenSpot] = 100;
            newMonName[firstOpenSpot] = newMon.name;
            newAttackSpeed[firstOpenSpot] = newMon.attackSpeed;
            newDamage[firstOpenSpot] = newMon.damage;
            newStatus[firstOpenSpot] = "ALIVE";
            newMonsterHP[firstOpenSpot] = newMon.hp;
            newMonsterHPMax[firstOpenSpot] = newMon.hp;
            newMonsterHPPer[firstOpenSpot] = 100;
          }
        }
      }

      newBaddies = {
        ...state,
        attackCurrentTicks: newAttackCurrentTicks,
        attackPercent: newPercent,
        monName: newMonName,
        status: newStatus,
        monsterSpawnCurrent: newMonsterSpawnCurrent,
        damage: newDamage,
        attackSpeed: newAttackSpeed,
        deck: newDeck,
        hand: newHand,
        discard: newDiscard,
        handSize: newHandSize,
        monsterHP: newMonsterHP,
        monsterHPMax: newMonsterHPMax,
        monsterHPPer: newMonsterHPPer,
      };
      return newBaddies;

    case "APPLY_DAMAGE":
      newPlayerLife = game.playerLife - action.data.number;
      if (newPlayerLife <= 0) {
        newPlayerLife = 0;
        newPlayerStatus = "DEAD";
      }
      return {
        ...state,
        playerLife: newPlayerLife,
        lifeStatus: "RED",
        lifeChangeCurrentTick: game.lifeChangeStartTick,
        playerStatus: newPlayerStatus,
      };

    case "SET_GAME_STATE":
      return {
        ...state,
        gameState: action.data.gameState,
      };

    case "CHOOSE_OPTION":
      if (game.gameState === "BETWEEN_LEVELS") {
        newGameState = "PLAYING";
        newStage = action.data.option;
      }
      if (game.gameState === "BEFORE_BOSS") {
        newGameState = "PLAYING";
        newStage = action.data.option;
      }
      if (
        game.gameState === "CARD_REWARD_CHOICE" ||
        game.gameState === "RELIC_REWARD_CHOICE"
      ) {
        switch (game.stages[newStage].reward) {
          case "CARD":
            // if reward choice is a new card add it to available commands, and deck
            newCommands.push(allCommands[action.data.option]);
            newDeck.push(allCommands[action.data.option].id);
            newDeck = shuffle(newDeck);
            break;
          case "RELIC":
            newRelics.push(allRelics[action.data.option].id);
            switch (allRelics[action.data.option].type) {
              case "FIRST":
                newCommands.forEach((command) => {
                  if (command.damageType === "FIRST") {
                    command.damage += allRelics[action.data.option].damage;
                  }
                });
                break;
              case "LAST":
                newCommands.forEach((command) => {
                  if (command.damageType === "LAST") {
                    command.damage += allRelics[action.data.option].damage;
                  }
                });
                break;
              case "ALL":
                newCommands.forEach((command) => {
                  if (command.damageType === "ALL") {
                    command.damage += allRelics[action.data.option].damage;
                  }
                });
                break;
              case "REQWERTY":
                newCommands.forEach((command) => {
                  command.damage *= 2;
                  command.name = command.name.split("").reverse().join("");
                });
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }

        // after processing reward go to level choice
        let option1;
        let option2;
        let option3;
        let opt;
        if (newLevel === bossLevel) {
          //next level is boss level
          newGameState = "BEFORE_BOSS";
          newOptions[0].name = game.stages[4].name;
          newOptions[0].longText = game.stages[4].longText;
          newOptions[0].id = game.stages[4].id;
          newOptions[0].reward = "VICTORY";
          newOptions[1].name = "";
          newOptions[1].longText = "";
          newOptions[1].id = "";
          newOptions[1].reward = "";
          newOptions[2].name = "";
          newOptions[2].longText = "";
          newOptions[2].id = "";
          newOptions[2].reward = "";
        } else {
          newGameState = "BETWEEN_LEVELS";
          option1 = -1;
          option2 = -1;
          option3 = -1;
          opt = 0;
          while (option1 === -1) {
            opt = Math.floor(Math.random() * game.stages.length - 1);
            option1 = opt;
          }
          while (option2 === -1) {
            opt = Math.floor(Math.random() * game.stages.length - 1);
            if (opt !== option1) {
              option2 = opt;
            }
          }
          while (option3 === -1) {
            opt = Math.floor(Math.random() * game.stages.length - 1);
            if (opt !== option1 && opt !== option2) {
              option3 = opt;
            }
          }
          newOptions[0].name = game.stages[option1].name;
          newOptions[0].longText = game.stages[option1].longText;
          newOptions[0].id = game.stages[option1].id;
          newOptions[0].reward = game.stages[option1].reward;
          newOptions[1].name = game.stages[option2].name;
          newOptions[1].longText = game.stages[option2].longText;
          newOptions[1].id = game.stages[option2].id;
          newOptions[1].reward = game.stages[option2].reward;
          newOptions[2].name = game.stages[option3].name;
          newOptions[2].longText = game.stages[option3].longText;
          newOptions[2].id = game.stages[option3].id;
          newOptions[2].reward = game.stages[option3].reward;
        }
      }
      return {
        ...state,
        stage: newStage,
        gameState: newGameState,
        optionList: newOptions,
        commands: newCommands,
        deck: newDeck,
        relics: newRelics,
      };

    case "USE_CARD":
      const card = game.commands.filter(
        (fCard) => fCard.id === newHand[action.data.id]
      )[0];
      switch (card.damageType) {
        case "ALL":
          for (let mon = 0; mon < 4; mon++) {
            if (newStatus[mon] === "ALIVE") {
              newMonsterHP[mon] -= card.damage;
              if (newMonsterHP[mon] <= 0) {
                newMonsterHP[mon] = 0;
                newMonsterHPPer[mon] = 0;
                newStatus[mon] = "DYING";
                newDyingCurrentTicks[mon] = game.dyingStartTicks;
                newStageKills += 1;
                newScore = newScore + 1;
                newScoreStatus = "GREEN";
              } else {
                newMonsterHPPer[mon] =
                  (newMonsterHP[mon] / newMonsterHPMax[mon]) * 100;
              }
            }
          }
          break;
        case "FIRST":
          let firstFound = false;
          for (let mon = 0; mon < 4; mon++) {
            if (newStatus[mon] === "ALIVE" && firstFound === false) {
              firstFound = true;
              newMonsterHP[mon] -= card.damage;
              if (newMonsterHP[mon] <= 0) {
                newMonsterHP[mon] = 0;
                newMonsterHPPer[mon] = 0;
                newStatus[mon] = "DYING";
                newDyingCurrentTicks[mon] = game.dyingStartTicks;
                newStageKills += 1;
                newScore = newScore + 1;
                newScoreStatus = "GREEN";
              } else {
                newMonsterHPPer[mon] =
                  (newMonsterHP[mon] / newMonsterHPMax[mon]) * 100;
              }
            }
          }
          break;
        case "LAST":
          let lastFound = false;
          for (let mon = 3; mon > -1; mon--) {
            if (newStatus[mon] === "ALIVE" && lastFound === false) {
              lastFound = true;
              newMonsterHP[mon] -= card.damage;
              if (newMonsterHP[mon] <= 0) {
                newMonsterHP[mon] = 0;
                newMonsterHPPer[mon] = 0;
                newStatus[mon] = "DYING";
                newDyingCurrentTicks[mon] = game.dyingStartTicks;
                newStageKills += 1;
                newScore = newScore + 1;
                newScoreStatus = "GREEN";
              } else {
                newMonsterHPPer[mon] =
                  (newMonsterHP[mon] / newMonsterHPMax[mon]) * 100;
              }
            }
          }
          break;
        default:
          break;
      }

      newDiscard.push(newHand[action.data.id]);
      newHand.splice(action.data.id, 1);

      if (game.stages[newStage].killTarget <= newStageKills) {
        newLevel += 1;
        newStatus = ["DEAD", "DEAD", "DEAD", "DEAD"];
        newStageKills = 0;

        //empty hand and discard pile back into deck
        newDiscard.forEach((e) => newDeck.push(e));
        newHand.forEach((e) => newDeck.push(e));
        newDiscard = [];
        newHand = [];

        let option1;
        let option2;
        let option3;
        let opt;
        switch (game.stages[newStage].reward) {
          case "CARD":
            newGameState = "CARD_REWARD_CHOICE";
            option1 = -1;
            option2 = -1;
            option3 = -1;
            opt = 0;
            while (option1 === -1) {
              opt = Math.floor(Math.random() * allCommands.length);
              option1 = opt;
            }
            while (option2 === -1) {
              opt = Math.floor(Math.random() * allCommands.length);
              if (opt !== option1) {
                option2 = opt;
              }
            }
            while (option3 === -1) {
              opt = Math.floor(Math.random() * allCommands.length);
              if (opt !== option1 && opt !== option2) {
                option3 = opt;
              }
            }
            newOptions[0].name = allCommands[option1].name;
            newOptions[0].longText =
              allCommands[option1].longText +
              " " +
              allCommands[option1].damage +
              " damage.";
            newOptions[0].id = allCommands[option1].id;
            newOptions[1].name = allCommands[option2].name;
            newOptions[1].longText =
              allCommands[option2].longText +
              " " +
              allCommands[option2].damage +
              " damage.";
            newOptions[1].id = allCommands[option2].id;
            newOptions[2].name = allCommands[option3].name;
            newOptions[2].longText =
              allCommands[option3].longText +
              " " +
              allCommands[option3].damage +
              " damage.";
            newOptions[2].id = allCommands[option3].id;
            break;
          case "RELIC":
            newGameState = "RELIC_REWARD_CHOICE";
            option1 = -1;
            option2 = -1;
            option3 = -1;
            opt = 0;
            while (option1 === -1) {
              opt = Math.floor(Math.random() * allRelics.length);
              option1 = opt;
            }
            while (option2 === -1) {
              opt = Math.floor(Math.random() * allRelics.length);
              if (opt !== option1) {
                option2 = opt;
              }
            }
            while (option3 === -1) {
              opt = Math.floor(Math.random() * allRelics.length);
              if (opt !== option1 && opt !== option2) {
                option3 = opt;
              }
            }
            newOptions[0].name = allRelics[option1].name;
            newOptions[0].longText = allRelics[option1].longText;
            newOptions[0].id = allRelics[option1].id;
            newOptions[1].name = allRelics[option2].name;
            newOptions[1].longText = allRelics[option2].longText;
            newOptions[1].id = allRelics[option2].id;
            newOptions[2].name = allRelics[option3].name;
            newOptions[2].longText = allRelics[option3].longText;
            newOptions[2].id = allRelics[option3].id;
            break;
          case "VICTORY":
            newGameState = "VICTORY";
            break;
          default:
            break;
        }
      }
      return {
        ...state,
        level: newLevel,
        stage: newStage,
        status: newStatus,
        stageKills: newStageKills,
        dyingCurrentTicks: newDyingCurrentTicks,
        gameState: newGameState,
        optionList: newOptions,
        monsterHP: newMonsterHP,
        monsterHPPer: newMonsterHPPer,
        deck: newDeck,
        hand: newHand,
        discard: newDiscard,
        score: newScore,
        scoreStatus: newScoreStatus,
        scoreChangeCurrentTick: game.scoreChangeStartTick,
      };
    default:
      return state;
  }
};

export const setAttack = (id, number) => {
  return {
    type: "SET_ATTACK_TIMER",
    data: {
      id: id,
      number: number,
    },
  };
};

export const tickAttack = () => {
  return {
    type: "TICK_BADDIES",
    data: {},
  };
};

export const tickLevel = () => {
  return {
    type: "TICK_LEVEL",
    data: {},
  };
};

export const castCard = (id) => {
  return {
    type: "USE_CARD",
    data: { id: id },
  };
};

export const startNewGame = () => {
  return {
    type: "START_NEW_GAME",
    data: {},
  };
};

export const chooseOption = (option) => {
  return {
    type: "CHOOSE_OPTION",
    data: { option: option },
  };
};

export const setGameState = (gameState) => {
  return {
    type: "SET_GAME_STATE",
    data: { gameState: gameState },
  };
};

export const applyDamage = (number) => {
  return {
    type: "APPLY_DAMAGE",
    data: { number: number },
  };
};

export const tickPlayer = () => {
  return {
    type: "TICK_PLAYER",
    data: {},
  };
};

export const pauseGame = (paused) => {
  return {
    type: "PAUSE_GAME",
    data: { paused: paused },
  };
};

export default reducer;

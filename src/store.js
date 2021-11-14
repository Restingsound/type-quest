import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

import gameReducer from "./reducers/gameReducer";

const reducer = combineReducers({
  game: gameReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

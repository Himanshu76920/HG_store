import { combineReducers } from "redux";
import storeReducer from "./store-reducer";
import agentReducer from "./agent-reducer";
import sellerReducer from "./seller-reducer";

const allReducers = combineReducers({
  store: storeReducer,
  agent: agentReducer,
  seller: sellerReducer,
});

const rootReducers = (state, action) => {
  if (action.type === "RESET_APP") {
    localStorage.clear();
  }
  return allReducers(state, action);
};

export default rootReducers;

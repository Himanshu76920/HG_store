import { ADD_AGENT, SET_ALL_AGENT, SET_AGENT_ACTION_MESSAGE } from "../types/agent-type";

const initialState = {
  allAgents: [],
  message: "",
  status: false,
};

const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_AGENT:
      return {
        ...state,
        allAgents: action.allAgents,
        message: action.message,
      };
    case ADD_AGENT:
      return {
        ...state,
        allAgents: state.allAgents.concat(action.agent),
        message: action.message,
        status: true,
      };
    case SET_AGENT_ACTION_MESSAGE:
      return {
        ...state,
        message: action.message,
        status: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default agentReducer;

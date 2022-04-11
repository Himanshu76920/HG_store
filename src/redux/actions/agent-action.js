import axios from "axios";
import { ApiUrl } from "../../constaint/ApiUrls";
import {
  ADD_AGENT,
  SET_ALL_AGENT,
  UPDATE_AGENT,
  DELETE_AGENT,
  SET_AGENT_ACTION_MESSAGE,
} from "../types/agent-type";

export const fetchAgentAction = () => {
  const url = ApiUrl.getAllAgent;
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };

    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: SET_ALL_AGENT,
          allAgents: response.data.data,
          message: response.data.message,
        });
      })
      .then((error) => {
        dispatch({
          type: SET_AGENT_ACTION_MESSAGE,
          message: error.message,
        });
      });
  };
};

export const createAgentAction = (data) => {
  const url = ApiUrl.addAgent;
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };

    await axios
      .post(url, data)
      .then((response) => {
        dispatch({
          type: ADD_AGENT,
          agent: response.data.data,
          message: response.data.message,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_AGENT_ACTION_MESSAGE,
          message: error.message,
        });
      });
  };
};

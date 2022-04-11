import axios from "axios";
import { ApiUrl } from "../../constaint/ApiUrls";
import {
  SET_ALL_STORE,
  ADD_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  SET_STORE_ACTION_MESSAGE,
} from "../types/store-type";

export const fetchStoreAction = () => {
  const url = ApiUrl.getAllStore;
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };

    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: SET_ALL_STORE,
          allStores: response.data.data,
          message: response.data.message,
        });
      })
      .then((error) => {
        dispatch({
          type: SET_STORE_ACTION_MESSAGE,
          message: error.message,
        });
      });
  };
};

export const createStoreAction = (data) => {
  const url = ApiUrl.addStore;
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };

    await axios
      .post(url, data)
      .then((response) => {
        dispatch({
          type: ADD_STORE,
          store: response.data.data,
          message: response.data.message,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_STORE_ACTION_MESSAGE,
          message: error.message,
        });
      });
  };
};

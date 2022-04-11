import axios from "axios";
import { ApiUrl } from "../../constaint/ApiUrls";
import {
  SET_ALL_SELLER,
  ADD_SELLER,
  UPDATE_SELLER,
  DELETE_SELLER,
  SET_SELLER_ACTION_MESSAGE,
} from "../types/seller-type";

export const fetchSellerAction = () => {
  const url = ApiUrl.getAllSeller;
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };

    await axios
      .get(url)
      .then((response) => {
        dispatch({
          type: SET_ALL_SELLER,
          allSellers: response.data.data,
          message: response.data.message,
        });
      })
      .then((error) => {
        dispatch({
          type: SET_SELLER_ACTION_MESSAGE,
          message: error.message,
        });
      });
  };
};

export const createSellerAction = (data) => {
  const url = ApiUrl.addSeller;
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    };

    await axios
      .post(url, data)
      .then((response) => {
        dispatch({
          type: ADD_SELLER,
          seller: response.data.data,
          message: response.data.message,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_SELLER_ACTION_MESSAGE,
          message: error.message,
        });
      });
  };
};

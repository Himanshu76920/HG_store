import { SET_ALL_SELLER, ADD_SELLER, SET_SELLER_ACTION_MESSAGE } from "../types/seller-type";

const initialState = {
  allSellers: [],
  message: "",
  status: false,
};

const sellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_SELLER:
      return {
        ...state,
        allSellers: action.allSellers,
      };
    case ADD_SELLER:
      return {
        ...state,
        allSellers: state.allSellers.concat(action.seller),
        message: action.message,
        status: true,
      };
    case SET_SELLER_ACTION_MESSAGE:
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

export default sellerReducer;

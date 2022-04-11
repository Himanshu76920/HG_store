import { ADD_STORE, SET_ALL_STORE, SET_STORE_ACTION_MESSAGE } from "../types/store-type";

const initialSate = {
  allStores: [],
  message: "",
  status: false,
};

const storeReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_ALL_STORE:
      return {
        ...state,
        allStores: action.allStores,
      };
    case ADD_STORE:
      return {
        ...state,
        allStores: state.allStores.concat(action.store),
        message: action.message,
        status: true,
      };
    case SET_STORE_ACTION_MESSAGE:
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

export default storeReducer;

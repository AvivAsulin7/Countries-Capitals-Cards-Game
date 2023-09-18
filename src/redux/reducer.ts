import {
  CHANGE_WRONG_FIELD,
  CHOOSE_CARD,
  CORRECT_MATCH,
  INCORRECT_MATCH,
  RESET_WRONG_FIELD,
} from "./constants";
import { cardType } from "../types/types";
import { initialStateType, actionType } from "./types";
import objectsArray from "../utils/data";

const initialState: initialStateType = {
  data: objectsArray,
  userChoice: [],
};

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case CHOOSE_CARD:
      if (!state.userChoice.find((item: cardType) => item === action.payload))
        return {
          ...state,
          userChoice: [...state.userChoice, action.payload],
        };
      else
        return {
          ...state,
          userChoice: state.userChoice.filter(
            (item) => item !== action.payload
          ),
        };

    case CORRECT_MATCH:
      console.log("correct", state);
      return {
        ...state,
        data: state.data.filter(
          (item: cardType) =>
            item.title != state.userChoice[0].title &&
            item.title != state.userChoice[1].title
        ),
        userChoice: [],
      };

    case INCORRECT_MATCH:
      return {
        ...state,
        data: state.data.map((item: cardType) => {
          return { ...item, onPress: false };
        }),
        userChoice: [],
      };

    case CHANGE_WRONG_FIELD:
      return {
        ...state,
        data: state.data.map((item: cardType) => {
          return { ...item, isWrong: true };
        }),
      };

    case RESET_WRONG_FIELD:
      return {
        ...state,
        data: state.data.map((item: cardType) => {
          return { ...item, isWrong: false };
        }),
      };
    default:
      return state;
  }
};

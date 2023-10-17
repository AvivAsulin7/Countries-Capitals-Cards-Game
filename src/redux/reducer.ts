import {
  GET_GAME_CARDS,
  CHANGE_WRONG_FIELD,
  CHOOSE_CARD,
  CORRECT_MATCH,
  INCORRECT_MATCH,
  RESET_WRONG_FIELD,
} from "./constants";
import { cardType } from "../types/types";
import { initialStateType, actionType } from "./types";
import getGameCards from "../utils/data";

const initialState: initialStateType = {
  data: getGameCards(10),
  userChoice: [],
};

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case GET_GAME_CARDS:
      if (typeof action.payload === "number")
        return { ...state, data: getGameCards(action.payload) };
      else return state;

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
      return {
        ...state,
        data: state.data.filter(
          (item: cardType) =>
            item.title !== state.userChoice[0].title &&
            item.title !== state.userChoice[1].title
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

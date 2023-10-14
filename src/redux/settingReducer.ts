import {
  CHANGE_NUM_OF_MISTAKES,
  CHANGE_DIFFICULTY,
  CHANGE_NUM_OF_CARDS,
  EASY,
  DECREMENT_MISTAKES,
  RESTART_GAME,
} from "./constants";
import { SettingActionType, initialStateSettingType } from "./types";

const initialState: initialStateSettingType = {
  numOfMistakes: 3,
  numOfCards: 10,
  difficulty: EASY,
};

export default (state = initialState, action: SettingActionType) => {
  switch (action.type) {
    case CHANGE_NUM_OF_MISTAKES:
      return { ...state, numOfMistakes: action.payload };

    case DECREMENT_MISTAKES:
      return { ...state, numOfMistakes: state.numOfMistakes - 1 };

    case CHANGE_DIFFICULTY:
      return { ...state, difficulty: action.payload };

    case CHANGE_NUM_OF_CARDS:
      return { ...state, numOfCards: action.payload };

    case RESTART_GAME:
      return {
        ...state,
        numOfMistakes: 3,
        numOfCards: 10,
        difficulty: EASY,
        isPlaying: false,
      };

    default:
      return state;
  }
};

import {
  CHANGE_NUM_OF_MISTAKES,
  CHANGE_DIFFICULTY,
  CHANGE_NUM_OF_CARDS,
  HARD,
  EASY,
  HANDLE_MUSIC,
} from "./constants";
import { SettingActionType, initialStateSettingType } from "./types";

const initialState: initialStateSettingType = {
  numOfMistakes: 1,
  numOfCards: 10,
  difficulty: EASY,
  isPlaying: false,
};

export default (state = initialState, action: SettingActionType) => {
  switch (action.type) {
    case CHANGE_NUM_OF_MISTAKES:
      return { ...state, numOfMistakes: action.payload };

    case CHANGE_DIFFICULTY:
      return { ...state, difficulty: action.payload };

    case CHANGE_NUM_OF_CARDS:
      return { ...state, numOfCards: action.payload };
    case HANDLE_MUSIC:
      return { ...state, isPlaying: !state.isPlaying };

    default:
      return state;
  }
};

import {
  CHANGE_WRONG_FIELD,
  CHOOSE_CARD,
  CORRECT_MATCH,
  INCORRECT_MATCH,
  RESET_WRONG_FIELD,
  HARD,
  EASY,
} from "./constants";
import { actionType, initialStateSettingType } from "./types";

const initialState: initialStateSettingType = {
  numOfMistakes: 3,
  numOfCards: 5,
  level: HARD,
};

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case CHOOSE_CARD:

    case CORRECT_MATCH:

    case INCORRECT_MATCH:

    case CHANGE_WRONG_FIELD:

    case RESET_WRONG_FIELD:

    default:
      return state;
  }
};

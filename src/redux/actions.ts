import { INCORRECT_MATCH, RESET_WRONG_FIELD } from "./constants";
import { CORRECT_MATCH, CHOOSE_CARD } from "../redux/constants";
import { cardType } from "../types/types";

export const choose_card = (value: cardType) => ({
  // ({}) == return {}
  type: CHOOSE_CARD,
  payload: value,
});

export const correct_match = () => ({
  // ({}) == return {}
  type: CORRECT_MATCH,
});

export const change_wrong_field = () => ({
  // ({}) == return {}
  type: RESET_WRONG_FIELD,
});

export const reset_wrong_field = () => ({
  // ({}) == return {}
  type: RESET_WRONG_FIELD,
});

export const incorrect_match = () => ({
  // ({}) == return {}
  type: INCORRECT_MATCH,
});

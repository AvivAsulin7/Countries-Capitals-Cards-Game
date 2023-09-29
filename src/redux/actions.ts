import {
  CHANGE_DIFFICULTY,
  CHANGE_NUM_OF_CARDS,
  CHANGE_NUM_OF_MISTAKES,
  GET_GAME_CARDS,
  HANDLE_MUSIC,
  INCORRECT_MATCH,
  RESET_WRONG_FIELD,
} from "./constants";
import { CORRECT_MATCH, CHOOSE_CARD } from "../redux/constants";
import { cardType } from "../types/types";

export const get_game_cards = (value: number) => ({
  // ({}) == return {}
  type: GET_GAME_CARDS,
  payload: value,
});

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

////////////////////////////////////////////////

export const change_num_of_mistakes = (value: number) => ({
  // ({}) == return {}
  type: CHANGE_NUM_OF_MISTAKES,
  payload: value,
});

export const change_difficulty = (value: string) => ({
  // ({}) == return {}
  type: CHANGE_DIFFICULTY,
  payload: value,
});

export const change_num_of_cards = (value: number) => ({
  // ({}) == return {}
  type: CHANGE_NUM_OF_CARDS,
  payload: value,
});

export const handle_music = () => ({
  // ({}) == return {}
  type: HANDLE_MUSIC,
});

import { cardType } from "./../types/types";

export interface initialStateType {
  data: cardType[];
  userChoice: cardType[];
}

export interface actionType {
  type: string;
  payload: cardType | number;
}

export interface reducerType {
  reducer: initialStateType;
}

////////// Setting Reducer ///////////

export interface initialStateSettingType {
  numOfMistakes: number;
  numOfCards: number;
  difficulty: string;
  isPlaying: boolean;
}

export interface settingReducerType {
  settingReducer: initialStateSettingType;
}

export interface SettingActionType {
  type: string;
  payload: string | number;
}

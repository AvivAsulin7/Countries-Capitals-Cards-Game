import { cardType } from "./../types/types";

export interface initialStateType {
  data: cardType[];
  userChoice: cardType[];
}

export interface actionType {
  type: string;
  payload: cardType;
}

export interface reducerType {
  reducer: initialStateType;
}

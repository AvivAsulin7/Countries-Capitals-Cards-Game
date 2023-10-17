import { MouseEvent } from "react";

export type countryType = {
  alcohol_prohibition: string;
  area: { km2: number; mi2: number };
  capital: string;
  constitutional_form: string;
  continent: string;
  country: string;
  currency: string;
  drive_direction: string;
  famous_for: string;
  flag: string;
  is_landlocked: boolean;
  iso: { numeric: string; alpha_2: string; alpha_3: string };
  language_codes: string[];
  native_language: string[];
  phone_code?: string;
  tld: string;
};

export interface cardType {
  title: string;
  match: string;
  img: string;
  onPress: boolean;
  isWrong: boolean;
}
export interface preferenceType {
  title: string;
  image: string;
  state: number | string;
  setState: (option: number | string) => void;
  arguments: (number | string)[];
}

export interface propsResultAndArrows {
  numStep?: number;
  handleStepsButtons: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface PropsBoard {
  data: cardType[];
}

export interface propsCard {
  item: cardType;
  key: number;
}

export interface propsGame {
  data: cardType[];
  isGoodMatch: boolean | null | undefined;
}

export interface statusProps {
  isGoodMatch: boolean | null | undefined;
}

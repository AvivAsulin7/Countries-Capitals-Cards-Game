export type countreyType = {
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
  is_landlocked: false;
  iso: { numeric: string; alpha_2: string; alpha_3: string };
  language_codes: string[];
  native_language: string[];
  phone_code: string;
  tld: string;
};

export interface cardType {
  title: string;
  type: string;
  match: string;
  img: string;
  onPress: boolean;
  isWrong: boolean;
}

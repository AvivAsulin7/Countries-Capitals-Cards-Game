import { countreyType } from "../types/types";
import questionMark from "../images/questionMark.jpg";
const CAPITAL = "capital";
const COUNTRY = "country";

const wcc = require("world-countries-capitals");

export default (amount: number) => {
  console.log("LENGTHHHHH", Math.floor(amount / 2));

  const data = wcc.getNRandomCountriesData(Math.floor(amount / 2));

  console.log("LENGTHHHHH2222222", amount);

  let objectsArray: any[] = [];

  data.forEach((item: countreyType) => {
    // Add the country object
    objectsArray.push({
      title: item.country,
      type: COUNTRY,
      match: item.capital,
      img: item.flag,
      onPress: false,
      isWrong: false,
    });

    // Add the capital object
    objectsArray.push({
      title: item.capital,
      type: CAPITAL,
      match: item.country,
      img: questionMark,
      onPress: false,
      isWrong: false,
    });
  });

  objectsArray = objectsArray.sort(() => Math.random() - 0.5);

  console.log(objectsArray);

  return objectsArray;
};

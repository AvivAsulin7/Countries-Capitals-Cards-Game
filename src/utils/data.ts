import { countreyType } from "../types/types";

const CAPITAL = "capital";
const COUNTRY = "country";

const wcc = require("world-countries-capitals");
const data = wcc.getNRandomCountriesData(3);

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
    img: "https://media.istockphoto.com/id/1143248834/vector/question-mark-red-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=Ram3c9tYnfDx6gs-6AfDAnui2znKkqO5_zEF6WFZLjk=",
    onPress: false,
    isWrong: false,
  });
});

objectsArray = objectsArray.sort(() => Math.random() - 0.5);

console.log(objectsArray);

export default objectsArray;

import { countryType, cardType } from "../types/types";
import questionMark from "../images/questionMark.jpg";
import { countries } from "./countries";

function shuffleArray(array: countryType[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const generateRandomCards = (amount: number) => {
  const shuffledData: countryType[] = [...countries];

  shuffleArray(shuffledData);

  const randomElements = shuffledData.slice(0, Math.floor(amount / 2));

  let objectsArray: cardType[] = [];

  randomElements.forEach((item: countryType) => {
    // Add the country object
    objectsArray.push({
      title: item.country,
      match: item.capital,
      img: item.flag,
      onPress: false,
      isWrong: false,
    });

    // Add the capital object
    objectsArray.push({
      title: item.capital,
      match: item.country,
      img: questionMark,
      onPress: false,
      isWrong: false,
    });
  });

  objectsArray = objectsArray.sort(() => Math.random() - 0.5);

  return objectsArray;
};

export default generateRandomCards;

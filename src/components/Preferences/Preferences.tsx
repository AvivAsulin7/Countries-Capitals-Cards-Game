import React, { useReducer, useState } from "react";
import "./Preferences.css";
import countries from "../../images/countries.png";
import mistakes from "../../images/mistakes.png";
import level from "../../images/level.png";
import { HARD, EASY } from "../../redux/constants";
import { preferenceType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { settingReducerType } from "../../redux/types";
import {
  change_difficulty,
  change_num_of_cards,
  change_num_of_mistakes,
  get_game_cards,
} from "../../redux/actions";
import Box from "../reusable-components/Box/Box";

const Preferences = () => {
  // const [selectedMistakes, setSelectedMistakes] = useState<number>(1);
  // const [selectedDifficulty, setselectedDifficulty] = useState<string>(EASY);
  // const [seelectedNumCards, setSelectedNumCards] = useState<number>(10);
  const { reducer, settingReducer } = useSelector<settingReducerType>(
    (state) => state
  ) as any;

  console.log(settingReducer);

  const disptach = useDispatch();

  // כנראה לבטל את יוס - רדוסר שבניתי, כי יש את הסטניג רדוסר הכללי שצריך להשתמש בו וככה נמנע פעמיים עדכון גם בלוקלי וגם בגלובלי (מספיק לעדכן ברדיקס ולהציג למסך)

  const preferencesArray: preferenceType[] = [
    {
      title: "Number of Mistakes",
      image: mistakes,
      state: settingReducer.numOfMistakes,
      setState: (option: number | string) => {
        if (typeof option === "number")
          disptach(change_num_of_mistakes(option));
      },
      arguments: [1, 3, 5, 10],
    },
    {
      title: "Difficulty",
      image: level,
      state: settingReducer.difficulty,
      setState: (option: number | string) => {
        if (typeof option === "string") disptach(change_difficulty(option));
      },
      arguments: [EASY, HARD],
    },
    {
      title: "Number of Cards",
      image: countries,
      state: settingReducer.numOfCards,
      setState: (option: number | string) => {
        if (typeof option === "number") {
          disptach(change_num_of_cards(option));
          console.log("sdfsdljflksdfl", option);
          disptach(get_game_cards(option));
        }
      },
      arguments: [10, 20, 30],
    },
  ];

  return (
    <div className="preferences">
      <h1>Select your preferences</h1>
      <div className="preferences-div">
        {preferencesArray.map((preference) => {
          return (
            <Box>
              <h4>{preference.title}</h4>
              <div>
                <img src={preference.image}></img>
              </div>
              <div className="options">
                {preference.arguments.map((option) => {
                  return (
                    <div
                      className={`option ${
                        preference.state === option ? "selected" : ""
                      }`}
                      onClick={() => preference.setState(option)}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default Preferences;

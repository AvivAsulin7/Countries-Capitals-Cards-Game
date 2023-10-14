import react, { useEffect } from "react";
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
  restart_game,
} from "../../redux/actions";
import Box from "../reusable-components/Box/Box";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "../../animation/variants";

const Preferences = () => {
  const { settingReducer } = useSelector<settingReducerType>(
    (state) => state
  ) as any;

  console.log(settingReducer);

  useEffect(() => {
    disptach(restart_game());
    disptach(get_game_cards(10));
  }, []);

  const disptach = useDispatch();

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
          disptach(get_game_cards(option));
        }
      },
      arguments: [10, 20, 30],
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="preferences"
        variants={variants}
        exit="exit"
        animate="visible"
        initial="hidden"
      >
        <h1 className="h1-preference">Select your preferences</h1>
        <div className="preferences-div">
          {preferencesArray.map((preference) => {
            return (
              <Box>
                <h4 className="preference-title">{preference.title}</h4>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Preferences;

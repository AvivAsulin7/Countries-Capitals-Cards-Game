import { useEffect, useState, MouseEvent } from "react";
import "./Board.css";
import Card from "../Card/Card";
import { cardType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  correct_match,
  incorrect_match,
  reset_wrong_field,
} from "../../redux/actions";
import { reducerType } from "../../redux/types";
import Header from "../Header/Header";
import { AnimatePresence, motion } from "framer-motion";
import rightArrow from "../../images/rightArrow.png";
import leftArrow from "../../images/leftArrow.png";
import Preferences from "../Preferences/Preferences";
import { variants } from "../../animation/variants";
import { useStepper } from "../../hooks/useStepper";
import Status from "../Status/Status";
import MusicBox from "../MusicBox/MusicBox";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

interface PropsBoard {
  data: cardType[];
}

const Board = ({ data }: PropsBoard) => {
  const globalState = useSelector<reducerType>((state) => state.reducer) as any;
  const { numStep, handleStepsButtons } = useStepper();
  const dispatch = useDispatch();

  useEffect(() => {
    if (globalState.userChoice.length === 2) {
      handleChoiceUser();
    }
  }, [globalState.userChoice]);

  const handleChoiceUser = () => {
    let first: cardType = globalState.userChoice[0];
    let second: cardType = globalState.userChoice[1];
    console.log(first, second);
    if (first.title === second.match || first.match === second.title) {
      console.log("CORRECT ANSWER");
      dispatch(correct_match());
    } else {
      console.log("INCORRECT ANSWER");

      globalState.data.forEach(async (item: cardType) => {
        if (item === first || item === second) {
          item.isWrong = true;
        }
        setTimeout(() => {
          dispatch(reset_wrong_field());
        }, 1200);
      });
      dispatch(incorrect_match());
    }
  };

  return (
    <div className="board">
      <AnimatePresence>
        {numStep === 1 && (
          <motion.div
            variants={variants}
            exit="exit"
            animate="visible"
            initial="hidden"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------------------------ */}

      <AnimatePresence>
        {numStep === 2 && (
          <motion.div
            variants={variants}
            exit="exit"
            animate="visible"
            initial="hidden"
          >
            <Preferences />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------------------------ */}

      {numStep === 3 &&
        (data.length > 1 ? (
          <div>
            <Status />
            <div className="cards">
              <AnimatePresence>
                {data.map((item: cardType, index: number) => (
                  <motion.div
                    variants={variants}
                    key={index}
                    animate="visible"
                    initial="hidden"
                    whileHover={{ scale: 1.2 }}
                    exit="afterMatch"
                  >
                    <Card
                      key={index}
                      item={item}
                      data={data}
                      handleChoiceUser={handleChoiceUser}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.h2
            style={{ color: "white" }}
            animate={{ rotate: 360, scale: 1 }}
          >
            You Win !
          </motion.h2>
        ))}

      {/* ------------------------------------------------------------------------------ */}

      <AnimatePresence>
        {numStep != 3 && (
          <motion.div
            variants={variants}
            animate="visibleArrows"
            initial="hidden"
            className="buttons"
            exit="exitArrows"
          >
            <motion.button
              whileHover={{
                scale: 1.2,
                opacity: numStep === 1 ? 0 : 1,
                cursor: numStep === 1 ? "default" : "pointer",
              }}
              className="btn"
              name={LEFT}
              onClick={(event: MouseEvent<HTMLButtonElement>) =>
                handleStepsButtons(event)
              }
            >
              <img src={leftArrow}></img>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="btn"
              name={RIGHT}
              onClick={(event: MouseEvent<HTMLButtonElement>) =>
                handleStepsButtons(event)
              }
            >
              <img src={rightArrow}></img>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Board;

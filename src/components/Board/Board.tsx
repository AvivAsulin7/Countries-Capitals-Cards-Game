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

const LEFT = "LEFT";
const RIGHT = "RIGHT";

interface PropsBoard {
  data: cardType[];
}

const Board = ({ data }: PropsBoard) => {
  const globalState = useSelector<reducerType>((state) => state.reducer) as any;
  const dispatch = useDispatch();
  const [numStep, setNumStep] = useState<number>(1);

  useEffect(() => {
    if (globalState.userChoice.length === 2) {
      handleChoiceUser();
    }
  }, [globalState.userChoice]);

  const handleStepsButtons = (event: MouseEvent<HTMLButtonElement>) => {
    const directionArrow = event.currentTarget.name;
    if (numStep === 1 && directionArrow === LEFT) return;
    if (directionArrow === LEFT) setNumStep((prev) => prev - 1);
    else if (directionArrow === RIGHT) setNumStep((prev) => prev + 1);
    console.log(numStep);
  };

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
      {numStep === 1 && <Header />}
      {numStep != 3 && (
        <div className="buttons">
          <motion.button
            variants={variants}
            animate="visible"
            initial="hidden"
            whileHover={{ scale: 1.2 }}
            className="btn"
            name="left"
            onClick={(event: MouseEvent<HTMLButtonElement>) =>
              handleStepsButtons(event)
            }
          >
            <img src={leftArrow}></img>
          </motion.button>
          <motion.button
            variants={variants}
            animate="visible"
            initial="hidden"
            whileHover={{ scale: 1.2 }}
            className="btn"
            name="right"
            onClick={(event: MouseEvent<HTMLButtonElement>) =>
              handleStepsButtons(event)
            }
          >
            <img src={rightArrow}></img>
          </motion.button>
        </div>
      )}

      {numStep === 2 && <Preferences />}

      {numStep === 3 &&
        (data.length > 1 ? (
          <div className="cards">
            <AnimatePresence>
              {data.map((item: cardType, index: number) => (
                <motion.div
                  variants={variants}
                  key={index}
                  animate="visible"
                  initial="hidden"
                  whileHover={{ scale: 1.2 }}
                  exit={{
                    rotate: 360,
                    scale: 0,
                    transition: { duration: 0.4 },
                  }}
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
        ) : (
          <motion.h2
            style={{ color: "white" }}
            animate={{ rotate: 360, scale: 1 }}
          >
            You Win !
          </motion.h2>
        ))}
    </div>
  );
};

export default Board;

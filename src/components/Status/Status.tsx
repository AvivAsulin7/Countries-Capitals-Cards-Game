import { useRef } from "react";
import "./Status.css";
import { settingReducerType } from "../../redux/types";
import { useSelector } from "react-redux";
import Box from "../reusable-components/Box/Box";
import { motion } from "framer-motion";
import { variants } from "../../animation/variants";
import { statusProps } from "../../types/types";

const negativeFeedback = ["Wrong!", "Try again", "Bad!", "Keep trying"];
const positiveFeedback = [
  "Great!",
  "You're on the right way!",
  "You're a Mater",
  "Good Job!",
  "Perfect Match",
];

const Status = ({ isGoodMatch }: statusProps) => {
  const settingReducer = useSelector<settingReducerType>(
    (state) => state.settingReducer
  ) as any;

  const generalMistakes = useRef(settingReducer.numOfMistakes).current;

  const isStatusComponent = true;

  return (
    <motion.div
      className="status"
      variants={variants}
      initial="hiddenStatus"
      animate="visibleStatus"
    >
      <Box isStatusComponent={isStatusComponent}>
        <div className="container-status">
          <h2>Your Life Points:</h2>
          <div>
            <motion.h3
              className={`${settingReducer.numOfMistakes === 1 && "beat"}`}
              variants={variants}
              initial="normal"
              animate={settingReducer.numOfMistakes === 1 && "beat"}
            >
              {settingReducer.numOfMistakes}
            </motion.h3>
            <h3>/</h3>
            <h3>{generalMistakes}</h3>
            <motion.div
              className="heart"
              variants={variants}
              initial="normal"
              animate={settingReducer.numOfMistakes === 1 && "beat"}
            >
              ❤️
            </motion.div>
          </div>
        </div>
      </Box>

      <Box isStatusComponent={isStatusComponent}>
        <div className="container-status">
          <h2>Status:</h2>
          <motion.h3 className="feedback">
            {isGoodMatch === true
              ? positiveFeedback[
                  Math.floor(Math.random() * negativeFeedback.length)
                ]
              : isGoodMatch === false
              ? negativeFeedback[
                  Math.floor(Math.random() * positiveFeedback.length)
                ]
              : isGoodMatch === null && "GOOD LUCK!"}
          </motion.h3>
        </div>
      </Box>
    </motion.div>
  );
};

export default Status;

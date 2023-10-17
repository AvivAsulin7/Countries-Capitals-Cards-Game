import React from "react";
import { MouseEvent } from "react";
import "./Arrows.css";
import { motion } from "framer-motion";
import rightArrow from "../../images/rightArrow.png";
import leftArrow from "../../images/leftArrow.png";
import { variants } from "../../animation/variants";
import { LEFT, RIGHT } from "../../constants/constants";
import { propsResultAndArrows } from "../../types/types";

const Arrows = ({ numStep, handleStepsButtons }: propsResultAndArrows) => {
  return (
    <div>
      {numStep !== 3 && (
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
            <img src={leftArrow} alt="left-arrow"></img>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn"
            name={RIGHT}
            onClick={(event: MouseEvent<HTMLButtonElement>) =>
              handleStepsButtons(event)
            }
          >
            <img src={rightArrow} alt="right-arrow"></img>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Arrows;

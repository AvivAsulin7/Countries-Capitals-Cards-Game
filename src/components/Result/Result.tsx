import { MouseEvent } from "react";
import "./Result.css";
import { restart_game } from "../../redux/actions";
import { motion } from "framer-motion";
import { VscDebugRestart } from "react-icons/vsc";
import gameOver from "../../images/gameOver.gif";
import gameWin from "../../images/gameWin.gif";
import { RESTART } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { settingReducerType } from "../../redux/types";
import { propsResultAndArrows } from "../../types/types";

const Result = ({ handleStepsButtons }: propsResultAndArrows) => {
  const settingReducer = useSelector<settingReducerType>(
    (state) => state.settingReducer
  ) as any;
  const dispatch = useDispatch();

  const handleRestart = (event: MouseEvent<HTMLButtonElement>) => {
    handleStepsButtons(event);
    dispatch(restart_game());
  };

  return (
    <motion.div animate={{ rotate: 360, scale: 1 }} className="div-win-lose">
      <h1>{settingReducer.numOfMistakes < 1 ? "You Lose" : "You Win !"}</h1>
      <img
        src={settingReducer.numOfMistakes < 1 ? gameOver : gameWin}
        className="win-lose"
      />
      <button
        className="restart"
        name={RESTART}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          handleRestart(event);
        }}
      >
        <VscDebugRestart size={35} />
      </button>
    </motion.div>
  );
};

export default Result;

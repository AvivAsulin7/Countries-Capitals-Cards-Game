import { useEffect, useState, MouseEvent } from "react";
import "./Board.css";
import { PropsBoard, cardType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  correct_match,
  decrement_mistakes,
  incorrect_match,
  reset_wrong_field,
} from "../../redux/actions";
import { reducerType, settingReducerType } from "../../redux/types";
import Header from "../Header/Header";
import Preferences from "../Preferences/Preferences";
import { useStepper } from "../../hooks/useStepper";
import Arrows from "../Arrows/Arrows";
import Result from "../Result/Result";
import Game from "../Game/Game";

const Board = ({ data }: PropsBoard) => {
  const globalState = useSelector<reducerType>((state) => state.reducer) as any;
  const settingReducer = useSelector<settingReducerType>(
    (state) => state.settingReducer
  ) as any;
  const [isGoodMatch, setIsGoodMatch] = useState<boolean | null | undefined>(
    null
  );
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
      setIsGoodMatch(true);
      dispatch(correct_match());
    } else {
      setIsGoodMatch(false);
      globalState.data.forEach(async (item: cardType) => {
        if (item === first || item === second) {
          item.isWrong = true;
        }
        setTimeout(() => {
          dispatch(reset_wrong_field());
        }, 1200);
      });

      dispatch(incorrect_match());
      dispatch(decrement_mistakes());
    }

    setTimeout(() => {
      setIsGoodMatch(undefined);
    }, 1200);
  };

  return (
    <div className="board-game">
      <div className="board">
        {numStep === 1 && <Header />}

        {/* ------------------------------------------------------------------------------ */}

        {numStep === 2 && <Preferences />}

        {/* ------------------------------------------------------------------------------ */}

        {numStep === 3 &&
          (data.length > 1 && settingReducer.numOfMistakes >= 1 ? (
            <Game data={data} isGoodMatch={isGoodMatch} />
          ) : (
            <Result handleStepsButtons={handleStepsButtons} />
          ))}

        {/* ------------------------------------------------------------------------------ */}
      </div>
      <Arrows numStep={numStep} handleStepsButtons={handleStepsButtons} />
    </div>
  );
};

export default Board;

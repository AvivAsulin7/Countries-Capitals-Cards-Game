import { useEffect } from "react";
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

interface PropsBoard {
  data: cardType[];
}

const Board = ({ data }: PropsBoard) => {
  const globalState = useSelector<reducerType>((state) => state.reducer) as any;
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
    <div className="cards">
      {data.map((item: cardType, index: number) => (
        <Card
          key={index}
          item={item}
          data={data}
          handleChoiceUser={handleChoiceUser}
        />
      ))}
    </div>
  );
};

export default Board;

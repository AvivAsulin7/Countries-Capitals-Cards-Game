import { cardType } from "../../types/types";
import "./Card.css";
import { useDispatch } from "react-redux";
import { choose_card } from "../../redux/actions";

interface propsCard {
  item: cardType;
  data: cardType[];
  handleChoiceUser: () => void;
}

const Card = ({ item, data, handleChoiceUser }: propsCard) => {
  const dispatch = useDispatch();

  const backgroundImageCard = {
    background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${item.img}) no-repeat`,
    backgroundSize: "cover",
  };

  const handleClickCard = () => {
    item.onPress = !item.onPress;
    dispatch(choose_card(item));
    if (item.isWrong) {
      item.isWrong = false; // Reset the isWrong property
    }
  };

  return (
    <div
      className={` card ${item.onPress && " press"} ${item.isWrong && "wrong"}`}
      onClick={handleClickCard}
      style={backgroundImageCard}
    >
      {item.title}
    </div>
  );
};

export default Card;

// ${!item.isWrong && !item.onPress && "normal"}

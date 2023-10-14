import Status from "../Status/Status";
import { AnimatePresence } from "framer-motion";
import { cardType, propsGame } from "../../types/types";
import Card from "../Card/Card";
import "./Game.css";

const Game = ({ data, isGoodMatch }: propsGame) => {
  return (
    <div className="container-cards">
      <Status isGoodMatch={isGoodMatch} />
      <div className="cards">
        <AnimatePresence>
          {data.map((item: cardType, index: number) => (
            <Card key={index} item={item} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Game;

import { Dispatch, SetStateAction } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import arrowRight from "../../images/arrowRight.png";
import arrowRightGif from "../../images/arrowRightGif.gif";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Countries </h1> <h1> -Capital </h1> <h1> City Game!</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <AnimatePresence>
        <motion.div
          className="info-game"
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          <p>
            In this game, you have to match the capital city to the country that
            matches it, the goal is to succeed in all the matches.
          </p>
          <p>Want to play? Click below </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Header;

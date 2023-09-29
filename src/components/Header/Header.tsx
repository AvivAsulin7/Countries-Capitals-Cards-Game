import "./Header.css";
import logo from "../../images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "../../animation/variants";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Countries </h1> <h1> -Capital </h1> <h1> City Game</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="info-game">
        <p>
          In this game, you have to match the capital city to the country that
          matches it, the goal is to succeed in all the matches.
        </p>
        <p>Want to play? let's go! </p>
      </div>
    </div>
  );
};

export default Header;

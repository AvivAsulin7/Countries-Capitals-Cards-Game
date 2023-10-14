import "./Header.css";
import logo from "../../images/countries.webp";
import { variants } from "../../animation/variants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      variants={variants}
      exit="exit"
      animate="visible"
      initial="hidden"
    >
      <div>
        <h1>Countries - Capital City Game</h1>
        <motion.img
          variants={variants}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          src={logo}
          alt="logo"
          className="logo"
        />
      </div>

      <div className="info-game">
        <p>
          In this game, you have to match the capital city to the country that
          matches it, the goal is to succeed in all the matches.
        </p>
        <p>Want to play? let's go! </p>
      </div>
    </motion.div>
  );
};

export default Header;

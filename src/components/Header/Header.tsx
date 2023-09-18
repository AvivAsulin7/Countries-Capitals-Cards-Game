import { Dispatch, SetStateAction } from "react";
import "./Header.css";

interface propsHeader {
  isStart: boolean;
  setIsStart: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ isStart, setIsStart }: propsHeader) => {
  return (
    <div className="header">
      <h1>Welcome to Countries-Capital City Game!</h1>
      {!isStart && (
        <>
          <p>
            In this game, you have to match the capital city to the country that
            matches it, the goal is to succeed in all the matches.
          </p>
          <p>Want to play? Click below </p>
          <button onClick={() => setIsStart((prev) => !prev)}>Start</button>
        </>
      )}
    </div>
  );
};

export default Header;

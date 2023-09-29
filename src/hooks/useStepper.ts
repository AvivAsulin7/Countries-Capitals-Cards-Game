import { useState, MouseEvent } from "react";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

export const useStepper = () => {
  const [numStep, setNumStep] = useState<number>(1);

  const handleStepsButtons = (event: MouseEvent<HTMLButtonElement>) => {
    const directionArrow = event.currentTarget.name;

    if (numStep === 1 && directionArrow === LEFT) return;

    if (directionArrow == LEFT) setNumStep((prev) => prev - 1);
    else if (directionArrow == RIGHT) {
      setNumStep((prev) => prev + 1);
    }
  };

  return { numStep, handleStepsButtons };
};

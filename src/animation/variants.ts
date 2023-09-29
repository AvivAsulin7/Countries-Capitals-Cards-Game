export const variants = {
  hidden: {
    opacity: 0.1,
    x: -1000,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50 },
  },
  afterMatch: {
    rotate: 360,
    scale: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0, // Make the element fully transparent
    transition: { type: "spring", stiffness: 40 }, // Add a transition for a smooth exit
  },
  exitArrows: {
    opacity: 0, // Make the element fully transparent
    x: 2000,
    transition: { type: "spring", stiffness: 40 }, // Add a transition for a smooth exit
  },
  visibleArrows: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50, delay: 0.5 },
  },
  hoverMusicButton: {
    rotate: 360,
    scale: 1.2,
    transition: { type: "spring", stiffness: 100 },
  },
  up: { y: -20 },
  down: { y: 0 },
};

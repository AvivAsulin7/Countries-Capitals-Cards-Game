export const variants = {
  hidden: {
    opacity: 0.1,
    alignSelf: "start",
    x: -1000,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

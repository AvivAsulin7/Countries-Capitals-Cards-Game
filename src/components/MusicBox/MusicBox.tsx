import React, { useState, useEffect } from "react";
import sound from "../../images/sound.png";
import noSound from "../../images/noSound.png";
import { Howl } from "howler";
import "./MusicBox.css";
import { motion } from "framer-motion";
import { variants } from "../../animation/variants";

const MusicBox = () => {
  const [playSound, setPlaySound] = useState(false);

  const src = require("../../audio/music.mp3");

  const music = new Howl({
    src: src,
    loop: true,
    volume: 0.1,
  });

  useEffect(() => {
    playSound ? music.play() : music.stop();
    return () => {
      music.unload();
    };
  }, [playSound]);

  return (
    <motion.img
      variants={variants}
      className="music-icon"
      src={playSound ? sound : noSound}
      onClick={() => setPlaySound((prev) => !prev)}
      whileHover="hoverMusicButton"
      initial="down"
      whileTap="up"
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    ></motion.img>
  );
};

export default MusicBox;

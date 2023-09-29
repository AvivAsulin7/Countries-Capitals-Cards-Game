import React, { useState, useEffect, useRef } from "react";
import sound from "../../images/sound.png";
import noSound from "../../images/noSound.png";
import { Howl, Howler } from "howler";
import "./MusicBox.css";
import { useDispatch, useSelector } from "react-redux";
import { settingReducerType } from "../../redux/types";
import { handle_music } from "../../redux/actions";
import { motion } from "framer-motion";
import { variants } from "../../animation/variants";

type Props = {};

const MusicBox = (props: Props) => {
  const settingReducer = useSelector<settingReducerType>(
    (state) => state.settingReducer
  ) as any;
  const dispatch = useDispatch();

  const src = require("../../audio/music.mp3");

  const music = new Howl({
    src: src,
    loop: true,
    volume: 0.1,
  });

  useEffect(() => {
    settingReducer.isPlaying ? music.play() : music.pause();
    return () => {
      music.unload();
    };
  }, [settingReducer.isPlaying]);

  const handleMusic = () => {
    dispatch(handle_music());
  };
  console.log(settingReducer.isPlaying);
  return (
    <>
      <motion.img
        variants={variants}
        className="music-icon"
        src={settingReducer.isPlaying ? sound : noSound}
        onClick={handleMusic}
        whileHover="hoverMusicButton"
        initial="down"
        whileTap="up"
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      ></motion.img>
    </>
  );
};

export default MusicBox;

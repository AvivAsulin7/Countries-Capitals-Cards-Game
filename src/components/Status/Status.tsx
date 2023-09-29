import React, { useState } from "react";
import "./Status.css";
import { settingReducerType } from "../../redux/types";
import { useSelector } from "react-redux";
import { VscError } from "react-icons/vsc";
import Box from "../reusable-components/Box/Box";
import sound from "../../images/sound.png";
import noSound from "../../images/noSound.png";
import MusicBox from "../MusicBox/MusicBox";

type Props = {};

const Status = (props: Props) => {
  const settingReducer = useSelector<settingReducerType>(
    (state) => state.settingReducer
  ) as any;
  console.log(settingReducer);

  const isMistakeIcon = true;

  return (
    <div className="status">
      <Box isMistakeIcon={isMistakeIcon}>
        {Array.from({ length: settingReducer.numOfMistakes }, (_, index) => (
          <VscError color="red" size={25} />
        ))}
      </Box>
    </div>
  );
};

export default Status;

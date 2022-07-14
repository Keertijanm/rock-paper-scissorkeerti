import React from "react";
import GameControls from "../GameControls/GameControls";
import DecisionBox from "../DecisionBox/DecisionBox";

const Player = (props) => {
  let glowEffect = {};
  if (props.active) {
    glowEffect = {
      "-webkit-box-shadow": "0 0 20px blue",
      "-moz-box-shadow": "0 0 20px blue",
      "box-shadow": "0 0 20px blue",
    };
  }

  return (
    <div style={glowEffect}>
      <GameControls wUpdate={props.weaponUpdate} isActive={props.active} />
      <DecisionBox weapon={props.weapon} status={props.status} />
    </div>
  );
};

export default Player;

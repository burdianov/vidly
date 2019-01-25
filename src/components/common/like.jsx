import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = props => {
  let iconData = ["heart"];
  if (!props.liked) {
    iconData.unshift("far");
  } else {
    iconData.unshift("fas");
  }
  return (
    <FontAwesomeIcon
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      icon={iconData}
    />
  );
};

export default Like;

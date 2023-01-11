import React from "react";
import classNames from "classnames"

import "components/Button.scss";

export default function Button(props) {
  let buttonClass = classNames("button", {"button--confirm": props.confirm, "day-list__item--full": props.spots === 0});

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
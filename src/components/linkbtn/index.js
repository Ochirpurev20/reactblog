import React from "react";
import "./style.css";

export const LinkBtn = (props) => {
  // let linkPage = () => {
  //   props.pageUpdate(props.ner);
  // };
  return (
    <li className="linkLi">
      {" "}
      <button className="linkBtn"> {props.ner}</button>
    </li>
  );
};

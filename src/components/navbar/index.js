import React from "react";
import "./style.css";

import { LinkBtn } from "../linkbtn";

export const Navbar = (props) => {
  // console.log("navbar dotroos props.page ni: " + props.pageUpdate);
  // console.log("container dotroos props.update ni: " + props.pageUpdate);

  return (
    <div className="navbar">
      <ul>
        {/* <LinkBtn ner="Эхлэл" onClick={() => update('home')}/> */}
        <LinkBtn ner="Home" pageUpdate={props.pageUpdate} />
        <LinkBtn ner="Create" pageUpdate={props.pageUpdate} />
        <LinkBtn ner="List" pageUpdate={props.pageUpdate} />
      </ul>
    </div>
  );
};

import React from "react";
import "./style.css";

import { Navbar } from "../navbar";
import { Content } from "../content";

export const Container = (props) => {
  // console.log("container dotroos props.page ni: " + props.page);
  // console.log("container dotroos props.update ni: " + props.pageUpdate);
  return (
    <div className="container">
      <Navbar pageUpdate={props.pageUpdate} />
      <Content page={props.page} />
    </div>
  );
};

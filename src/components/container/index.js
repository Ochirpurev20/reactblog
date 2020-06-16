import React, { useState } from "react";
import "./style.css";
import { Route } from "react-router-dom";

import { Navbar } from "../navbar";
// import { Content } from "../content";
import { Home } from "../home";
import { Creator } from "../creator";
import { List } from "../list";
import { Detail } from "../detail";

export const Container = (props) => {
  const [id, updateId] = useState("");

  // console.log("container dotroos props.page ni: " + props.page);
  // console.log("container dotroos props.update ni: " + props.pageUpdate);
  return (
    <div className="container">
      <Navbar pageUpdate={props.pageUpdate} />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/create">
        <Creator />
      </Route>
      <Route path="/list">
        <List updateId={updateId} />
      </Route>
      <Route path="/detail">
        <Detail id={id} />
      </Route>
    </div>
  );
};

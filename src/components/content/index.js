import React from "react";
import "./style1.css";

import { Creator } from "../creator";
import { List } from "../list";

export const Content = (props) => {
  let template;
  // console.log("content dotroos props.page ni: " + props.page);
  switch (props.page) {
    case "Home":
      console.log("home");
      template = (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          minus omnis in asperiores nostrum itaque, molestiae recusandae facere!
          Enim necessitatibus culpa, perspiciatis, reprehenderit eius expedita
          fuga molestias ut ipsa, adipisci vero id ad. Voluptate veniam alias
          esse obcaecati, quas eum modi id soluta reprehenderit amet quod quam
          odio odit! Repudiandae facilis perferendis libero saepe sit, fuga
          eligendi aliquid voluptas blanditiis!
        </p>
      );
      break;
    case "Create":
      console.log("create");
      template = <Creator />;
      break;
    case "List":
      console.log("list");
      template = <List />;
      break;
    default:
      break;
  }

  return <div className="content">{template}</div>;
};

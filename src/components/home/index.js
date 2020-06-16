import React from "react";
import "./style.module.css";
import { ContP } from "../contp";

export const Home = () => {
  const contValue =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, eligendi modi. Esse sit perferendis accusamus sunt velit, vel perspiciatis molestias, ipsum voluptas provident error tenetur, officia hic asperiores aliquam suscipit.";
  return (
    <div className="content">
      <ContP content={contValue} />
    </div>
  );
};

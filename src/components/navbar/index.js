import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// import { LinkBtn } from "../linkbtn";

export const Navbar = (props) => {
  // console.log("navbar dotroos props.page ni: " + props.pageUpdate);
  // console.log("container dotroos props.update ni: " + props.pageUpdate);

  return (
    <div className="navbar">
      <ul>
        <li className="linkLi">
          <Link to="/">
            {" "}
            <button className="linkBtn">Эхлэл</button>{" "}
          </Link>
        </li>
        <li className="linkLi">
          <Link to="/create">
            {" "}
            <button className="linkBtn">Үүсгэх</button>{" "}
          </Link>
        </li>
        <li className="linkLi">
          <Link to="/list">
            {" "}
            <button className="linkBtn">Жагсаалт</button>{" "}
          </Link>
        </li>
        {/* <LinkBtn ner="Эхлэл" onClick={() => update('home')}/> */}
        {/* <LinkBtn ner="Home" pageUpdate={props.pageUpdate} />
        <LinkBtn ner="Create" pageUpdate={props.pageUpdate} />
        <LinkBtn ner="List" pageUpdate={props.pageUpdate} /> */}
      </ul>
    </div>
  );
};

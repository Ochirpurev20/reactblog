import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Detail = (props) => {
  const [id, setId] = useState(0);
  setId(props.id);
  let tempData;
  const [list, setList] = useState([]);
  let createUser;
  let currentDate = getTime();
  let updateuser;
  useEffect(
    fetch("http://blog.mn/api/read/id", {
      headers: { "Content-type": "application/json" },
      method: "post",
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        tempData = data[0];
        console.log(data[0]);
        setList(tempData);

        //base deer bga id neriig medej bga uchraas shuud shalgav
        if (list.create_user_id == 1) createUser = "ochir";
        else if (list.create_user_id == 2) createUser = "chuka";
        else if (list.create_user_id == 3) createUser = "badral";

        if (list.update_user_id == undefined) {
          updateuser = "одоогоор засаагүй";
        } else if (list.update_user_id == 1) updateuser = "ochir";
        else if (list.update_user_id == 2) updateuser = "chuka";
        else if (list.update_user_id == 3) updateuser = "badral";
        if (list.updated_dt == undefined) currentDate = "одоогоор засаагүй";
        else currentDate = list.updated_dt;
      }),
    [id]
  );

  function getTime() {
    var currentdate = new Date();
    var datetime =
      currentdate.getFullYear() +
      "-" +
      (currentdate.getMonth() + 1) +
      "-" +
      currentdate.getDate() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return datetime;
  }

  //undsen butsaah heseg
  return (
    <div className="content">
      {" "}
      detail orj irsen id {props.id}
      {/* <h2 id="title">{list.title}</h2>
      <br />
      <p className="contentText" id="content">
        {list.content}
      </p>
      <br />

      <div id="new">
        <p className="desc">Зассан хэрэглэгч</p>
        <p className="contentText" id="create_user">
          {updateuser}
        </p>
        <p className="desc">Сүүлд зассан огноо</p>
        <p className="contentText" id="date1">
          {currentDate}
        </p>
      </div>
      <div id="oldInfo">
        <p className="desc">Үүсгэсэн хэрэглэгч</p>
        <p className="contentText" id="create_user">
          {createUser}
        </p>
        <p className="desc">Үүссэн огноо</p>
        <p className="contentText" id="date1">
          {list.created_dt}
        </p>
      </div> */}
    </div>
  );
};

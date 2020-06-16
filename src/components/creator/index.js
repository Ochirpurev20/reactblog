import React, { useState, useEffect } from "react";

export const Creator = () => {
  useEffect(() => {
    //user uudiin medeelliig duudah
    fetch("/api/read/user")
      .then((res) => res.json())
      .then((data) => {
        //console.log("res data: " + JSON.stringify(data));
        let tempData = data.results;
        //user uudiig delgets deerh select tag ruu oruulah
        let id = [];
        let selection = document.getElementById("user");
        for (let i = 0; i < tempData.length; i++) {
          id[i] = tempData[i].id;
          let option = `<option value="${tempData[i].id}"> ${tempData[i].name}</option>`;
          selection.insertAdjacentHTML("beforeend", option);
          // console.log("rowdata: ", tempData[i]);
          // console.log(typeof tempData[i]);
        }
      });
    // alert("use effect s ");
  }, []);
  //yag odoogiin ognoo, tsagiig avah
  const gettime = () => {
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
  };
  let [title, updateTitle] = useState("");
  const funClick = () => {
    alert("Fun click func daraglaa");
  };
  return (
    <div className="content">
      <form>
        <label>Гарчиг</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(ev) => {
            updateTitle(ev.target.value);
          }}
        />
        <br />

        <label>Агуулга</label>
        <br />
        <textarea name="content" id="content" cols="55" rows="10"></textarea>
        <br />
        <label> Үүссэн огноо</label>
        <br />
        <label id="date">{gettime()}</label>
        <br />
        <select name="user" id="user">
          {" "}
        </select>
        <br />
        <br />

        <button type="button" onClick={funClick}>
          create
        </button>
      </form>
    </div>
  );

  // { document.getElementById("date").textContent = gettime()}
};

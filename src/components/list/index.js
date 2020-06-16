import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title } from "../title";
import { Short } from "../short";
import "./style.module.css";

export const List = (props) => {
  const [list, updateList] = useState([]);
  let param = new URLSearchParams(document.location.search.substring(1));
  // console.log("param is: " + param);
  var limit = parseInt(param.get("limit"));
  var page = parseInt(param.get("page"));
  // console.log("limit is " + limit + " type ni " + typeof limit);
  if (isNaN(limit)) limit = 5;
  else console.log(limit);
  if (isNaN(page)) page = 0;
  else console.log(page);
  let allData;
  let tempData;
  useEffect(() => {
    fetch("http://blog.mn/api/read/10", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ limit, page }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("res data: " + JSON.stringify(data));
        // setTempData(data.post);
        allData = data;
        tempData = data.post;
        // setallData(JSON.stringify(data));
        // console.log(`allData  ni ${typeof allData}`);
        // console.log(`tempdata  ni ${JSON.stringify(tempData)}`);
        // console.log(`tempData nii type  ni ${typeof tempData}`);
        //duudagdaj irsen buh post nii medeelliig haruulah
        // let id = [];
        // let listTable = document.getElementById("listTable");
        updateList(tempData);

        // for (let i = 0; i < tempData.length; i++) {
        //   id[i] = tempData[i].id;
        //   let row = listTable.insertRow(i);
        //   let cell1 = row.insertCell(0);
        //   let cell2 = row.insertCell(1);
        //   let cell3 = row.insertCell(2);
        //   let cell4 = row.insertCell(3);
        //   let cell5 = row.insertCell(4);
        //   let cell6 = row.insertCell(5);
        //   cell1.innerHTML = tempData[i].title.substring(0, 8);
        //   cell2.innerHTML = tempData[i].content.substring(0, 15);
        //   cell3.innerHTML = tempData[i].created_dt.substring(0, 10);

        //   //base deer bga id neriig medej bga uchraas shuud shalgav
        //   if (tempData[i].create_user_id == 1) userNer = "ochir";
        //   else if (tempData[i].create_user_id == 2) userNer = "chuka";
        //   else if (tempData[i].create_user_id == 3) userNer = "badral";
        //   cell4.innerHTML = userNer;
        //   cell5.innerHTML = `<a href="detail.html?id=${id[i]}">Дэлгэрэнгүй</a>`;
        //   cell6.innerHTML = `<button class="deleteBtn" onclick="deleteRow(${id[i]})">Устгах</button>`;
        //   // console.log("rowdata: ", tempData[i]);
        //   // console.log(typeof tempData[i]);
        // }
        let z = Math.ceil(allData.counter.length / limit);

        for (let i = 0; i < z; i++) {
          console.log("z is: " + z);
          let j = i * 5;
          let footerDiv = `<a href="list.html?limit=5&page=${j}">${i + 1}</a>`;
          document
            .getElementById("footerDiv")
            .insertAdjacentHTML("beforeend", footerDiv);
        }
      });
    function deleteRow(id) {
      fetch("http://blog.mn/api/delete", {
        headers: { "Content-type": "application/json" },
        method: "delete",
        body: JSON.stringify({ id }),
      });
      // location.reload();
    }
    //shineer hiise componentuudiig oruulj ehelj bn
  }, []);
  // useEffect(() => {});
  const detail = (id) => {
    alert("something alert from detail and id is " + id);
  };
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
  return (
    <div className="content">
      <table id="mainTable">
        <thead>
          <tr>
            <th>Гарчиг</th>
            <th>Агуулга</th>
            <th>Огноо</th>
            <th>Хэрэглэгч</th>
            <th>Дэлгэрэнгүй</th>
            <th>Устгах</th>
          </tr>
        </thead>
        <tbody id="listTable">
          {list.map((item) => {
            let userNer;
            if (item.create_user_id === 1) userNer = "ochir";
            else if (item.create_user_id === 2) userNer = "chuka";
            else if (item.create_user_id === 3) userNer = "badral";
            return (
              <tr key={item.id}>
                <td>
                  <Title value={item.title.substring(0, 8)} />
                </td>
                <td>
                  {" "}
                  <Short value={item.content.substring(0, 15)} />
                </td>
                <td>{item.created_dt.substring(0, 10)}</td>
                <td>{userNer}</td>
                <td>
                  <Link
                    to="/detail"
                    onClick={() => {
                      props.updateId(item.id);
                    }}
                  >
                    Дэлгэрэнгүй
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link to="/delete">Устгах</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footerDiv" id="footerDiv"></div>
    </div>
  );
};

import React from "react";

export const List = () => {
  return (
    <div>
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
          <tbody id="listTable"></tbody>
        </thead>
      </table>
    </div>
  );
};

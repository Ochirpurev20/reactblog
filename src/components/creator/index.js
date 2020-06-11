import React from "react";

export const Creator = () => {
  return (
    <div>
      <form className="content">
        <label>Гарчиг</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />

        <label>Агуулга</label>
        <br />
        <textarea name="content" id="content" cols="55" rows="10"></textarea>
        <br />
        <label> Үүссэн огноо</label>
        <br />
        <label id="date"></label>
        <br />
        <select name="user" id="user">
          {" "}
        </select>
        <br />
        <br />

        <button type="button">create</button>
      </form>
    </div>
  );
};

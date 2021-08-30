import React from "react";

export default function Form() {
function clickHandler() {
    document.getElementById("click").addEventListener("click", clickHandler)
}
  return (
    <>
        <div>
        <input type="text" placeholder="Write a new todo" />
        <br />
        <button id="click" onClick={clickHandler}>Add todo</button>
        </div>
    </>
  );
}
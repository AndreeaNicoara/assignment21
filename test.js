"use strict";

const doThis = function() {
  let x = document.getElementById("abc");
  x.innerHTML = "Hello World!";
}

window.addEventListener("load", doThis);

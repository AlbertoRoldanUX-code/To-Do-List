"use strict";

const btnForm = document.querySelector(".btn");

btnForm.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
});

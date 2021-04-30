"use strict";

const btnForm = document.querySelector(".btn");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

const twenty = document.querySelector(".twenty");

btnForm.addEventListener("click", function (e) {
  //Prevent form from submitting
  e.preventDefault();

  //Get task
  const task = input1.value;

  //Calculate sum of both inputs
  const sum = Number(input2.value) + Number(input3.value);

  console.log(sum, task);

  // Clear input fields
  input1.value = input2.value = "";

  //Create element
  const html = `<h1>${task}</h1>`;
  twenty.insertAdjacentHTML("afterbegin", html);
});

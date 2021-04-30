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

  // Clear input fields
  input1.value = input2.value = input3.value = "";

  //Create element
  const html = `
    <div class="task">
        <h3 class="tasks">${task}</h3>
        <button class="btn2">
            <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
    </div>`;

  //Display task in their respective div
  document.querySelector(`.div${sum}`).insertAdjacentHTML("afterbegin", html);
});

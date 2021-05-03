"use strict";

const btnForm = document.querySelector(".btn");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

//Focus on textarea
input1.focus();

//Function that limits number of characters to 2
const charLimit = function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
};

//Limit number of characters
input2.oninput = input3.oninput = charLimit;

btnForm.addEventListener("click", function () {
  //Get task
  const task = input1.value;

  //Calculate sum of both inputs
  const sum = Number(input2.value) + Number(input3.value);

  //Show error message if there's no task
  if (input1.value === "" || input2.value === "" || input3.value === "") {
    alert("Please fill out every field");
  } else {
    // Clear input fields
    input1.value = input2.value = input3.value = "";
    //Create element
    const html = `
    <li>
    
    <div class="task">
        <h3>${task}</h3>
        <button class="btn2">
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
    </div>
    </li>
      `;

    //Display task in their respective div
    document.querySelector(`.div${sum}`).insertAdjacentHTML("beforeend", html);
  }

  //Delete task when clicking on btn2
  document.querySelector(".btn2").addEventListener("click", function (e) {
    const removeTarget = e.target.parentNode.parentNode;
    removeTarget.style.opacity = "0";
    setTimeout(function () {
      removeTarget.parentNode.remove();
    }, 1000);
  });
});

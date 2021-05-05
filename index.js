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
  //Get task and inputs
  const task = input1.value;
  const importance = Number(input2.value);
  const urgency = Number(input3.value);

  //Calculate sum of both inputs
  const sum = Number(input2.value) + Number(input3.value);

  //Show error message if there's no task
  if (input1.value === "" || input2.value === "" || input3.value === "") {
    alert("Please fill out every field");
  }

  //Show error message if inputs are not between 1 and 10
  if (importance < 0 || importance > 10 || urgency < 0 || urgency > 10) {
    return alert("Please enter values between 1 and 10");
  }

  //Display task if data is valid
  if (0 < importance <= 10 && 0 < urgency <= 10) {
    // Clear input fields
    input1.value = input2.value = input3.value = "";
    //Create element
    const html = `
    <li class="li">
      <div class="task">
          <h3>${task}</h3>
          <button class="btn2">
              <i class="fa fa-times" aria-hidden="true"></i>
          </button>
      </div>
    </li>
      `;

    //Display html
    document.querySelector(`.div${sum}`).insertAdjacentHTML("beforeend", html);

    // Add fadeIn class to all .li after 1 millisecond
    setTimeout(() => {
      document
        .querySelectorAll(".li")
        .forEach((li) => li.classList.add("fadeIn"));
    }, 1);
  }
});

//Delete task when clicking on btn2
const removeTask = function (e) {
  if (
    e.target.classList.contains("btn2") ||
    e.target.classList.contains("fa-times")
  ) {
    //Fade out effect
    e.target.closest("li").style.opacity = "0";
    setTimeout(function () {
      e.target.closest("li").remove();
    }, 1000);
  }
};

document.addEventListener("click", removeTask);

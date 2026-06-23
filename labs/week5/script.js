// Variables and Data Types
let message = "Hello, JavaScript!";
console.log(message);

// Function Declaration
function greetUser() {
  alert("Welcome to JavaScript Fundamentals!");
}

document.addEventListener("DOMContentLoaded", greetUser);

let button = document.getElementById("changeText");
let text = document.getElementById("text");
let input = document.getElementById("textUpdate");
let clock = document.getElementById("clock");

// gotten from https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

setInterval(function() {
  let sections_str = clock.innerHTML.split(":");
  let sections = [parseInt(sections_str[0]), parseInt(sections_str[1]), parseInt(sections_str[2])]
  sections[2] += 1;
  if (sections[2] == 60) {
    sections[2] = 0;
    sections[1] += 1;
  }

  if (sections[1] == 60) {
    sections[1] = 0;
    sections[0] += 1;
  }

  clock.innerHTML =
      pad(sections[0].toString(), 2)
      + ":"
      + pad(sections[1].toString(), 2)
      + ":"
      + pad(sections[2].toString(), 2);
}, 1000);

input.addEventListener("input", function() {
  text.textContent = input.value;
  text.style.color = "red";
});

button.addEventListener("click", function() {
  text.textContent = "You clicked the button!";
  text.style.color = "blue";
});

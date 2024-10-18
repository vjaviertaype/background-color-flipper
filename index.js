const btn = document.querySelector(".btn");
const main = document.querySelector("main");
const color = document.querySelector(".color");


function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function blackOrWhite(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";
}

btn.addEventListener("click", function () {
  let hexColor = randomHexColor();

  main.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
});
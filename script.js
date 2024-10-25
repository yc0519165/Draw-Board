const box = document.querySelectorAll(".box");
const inputColor = document.getElementById("color-input");
let color = "black";

inputColor.addEventListener("change", () => {
  color = inputColor.value;
});

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", () => {
    box[i].style.backgroundColor = color;
  });
}

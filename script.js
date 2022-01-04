const btn = document.querySelector(".main-btn");
const message = document.querySelector(".message");

let x = 0;

btn.addEventListener("click", function () {
  x++;
  if (x % 2 == 0) {
    message.style.background = "linear-gradient(green, rgb(77, 197, 77))";
  } else {
    message.style.background =
      "linear-gradient(rgb(101, 143, 3), rgb(165, 253, 2))";
  }
});

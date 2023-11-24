const white = document.querySelector(".white");
const dark = document.querySelector(".dark");
const body = document.body;

dark.addEventListener("click", function () {
  dark.style.display = "none";
  white.style.display = "block";
  body.style.backgroundColor = "white";
});
white.addEventListener("click", function () {
  white.style.display = "none";
  dark.style.display = "block";
  body.style.backgroundColor = "#3f49cc";
});

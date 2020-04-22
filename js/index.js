const btnSwitch = document.querySelector(".switch-btn");
btnSwitch.addEventListener("click", () =>
  btnSwitch.classList.toggle("switch-on")
);

const body = document.querySelector("body");
btnSwitch.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
});
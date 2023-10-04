const containerInput = document.querySelector(".container__input");
const form = document.querySelector(".container__input--buttom");
const p = document.querySelector(".container__p_state");
const boton = document.querySelector("#bontonInput");
const regEx =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

form.addEventListener("submit", (e) => {
  if (regEx.test(containerInput.value) == true) {
    p.classList.remove("block");
  } else {
    e.preventDefault();
    p.classList.add("block");
    containerInput.style.border = "1px solid hsl(354, 100%, 66%)";
  }
});
//p.setAttribute("style", "display: block");

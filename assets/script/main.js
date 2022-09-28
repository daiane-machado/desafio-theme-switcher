const btnToggle = document.getElementById("btn-toggle");
const container = document.getElementById("container");

btnToggle.onclick = (e) => {
  e.preventDefault();
  
  container.classList.toggle("container__toggle--theme-dark")
  btnToggle.classList.toggle("toggle__btn--position-rigth")
}
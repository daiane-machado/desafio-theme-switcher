const container = document.getElementById("container");
const checkbok = document.getElementById("checkbox");

checkbok.onclick = () => {  
  container.classList.toggle("container__switch--theme-dark");
}
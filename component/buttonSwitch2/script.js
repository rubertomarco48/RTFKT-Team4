const switch3 = document.getElementById("switch3")
const switch2 = document.getElementById("switch2")
const cardContainer = document.querySelector('.snap__cont__video');

switch3.addEventListener("click", () => {
  cardContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
});

switch2.addEventListener("click", () => {
  cardContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
});
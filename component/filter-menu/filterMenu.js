const clearCategoriesBtn = document.getElementById("clearCategoriesBtn");
const clearCreatorsBtn = document.getElementById("clearCreatorsBtn");

const sectionButtonCategories = document.querySelector(
  ".sectionButtonCategories"
);
const sectionButtonCreators = document.querySelector(".sectionButtonCreators");

function showHideCategories() {
  const display = sectionButtonCategories.style.display;
  if (display === "none") {
    sectionButtonCategories.style.display = "flex";
  } else {
    sectionButtonCategories.style.display = "none";
  }
}

function hideCreators() {
  const display = sectionButtonCreators.style.display;
  if (display === "none") {
    sectionButtonCreators.style.display = "flex";
  } else {
    sectionButtonCreators.style.display = "none";
  }
}

clearCategoriesBtn.addEventListener("click", showHideCategories);
clearCreatorsBtn.addEventListener("click", hideCreators);

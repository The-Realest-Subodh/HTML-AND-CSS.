const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

if (parent) {
  parent.addEventListener("click", () => {
    parent.innerHTML = "Parent Clicked.";
  });
}

if (child) {
  child.addEventListener("click", (event) => {
    event.stopPropagation();
    child.innerHTML = "Child Clicked.";
  });
}

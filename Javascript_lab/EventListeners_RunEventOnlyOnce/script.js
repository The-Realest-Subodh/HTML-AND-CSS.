const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  () => {
    console.log("grand parent");
  },
  { once: true }
);

let count = 0;
const runtwice = function (event) {
  count++;
  console.log("Parent");
  if (count == 2) {
    parent.removeEventListener("click", runtwice);
  }
};

parent.addEventListener("click", runtwice);

child.addEventListener("click", () => {
  console.log("Child");
});

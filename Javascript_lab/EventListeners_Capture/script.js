const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  () => {
    console.log("grand parent Capture");
  },
  { capture: true }
);

grandparent.addEventListener("click", () => {
  console.log("GrandParent Bubble");
});

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capture");
  },
  { capture: true }
);

parent.addEventListener("click", () => {
  console.log("parent Bubble");
});

child.addEventListener(
  "click",
  () => {
    console.log("Child capture");
  },
  { capture: true }
);

child.addEventListener("click", () => {
  console.log("child Bubble");
});

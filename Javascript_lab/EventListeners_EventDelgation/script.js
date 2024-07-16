const divs = document.querySelectorAll("div");

document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("div says hi");
  }
});

// or you can just do it like this

// GlobalEventListeners('click',  'div', e => {
//     console.log('div says hi')
// })

// function GlobalEventListeners(type, selector, callback){
//     document.addEventListener(type, e =>{
//         if(e.target.matches(selector)) callback(e)
//     })
// }

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv = style.backgroundColor = "purple";

document.body.append(newDiv);

const container = document.querySelector(".container");
let input = document.querySelector("#input");
const generateGrid = document.querySelector("#generategrid");
let squareDivs;
const clearGrid = document.querySelector("#cleargrid")

generateGrid.addEventListener("click", () => {
    const boxes = parseInt(input.value);
    generate(boxes)
})
   
clearGrid.addEventListener("click", () => {
    let clear = parseInt(container.innerHTML)
    container.innerHTML = ""
    squareDivs = []
    generate(clear)
})





function generate(box) {
if (box>900){
    container.innerHTML = ""
    const error = document.createElement("button")
    error.textContent = "Please enter a number less than 900"
    container.appendChild(error);
    console.log(error);
    return;
    
}
if (box<0){
    container.innerHTML = ""
    const error = document.createElement("button")
    error.textContent = "Please enter a number more than 00"
    container.appendChild(error);
    console.log(error);
    return;
    
}
if(box<900){
    const boxes = parseInt(input.value);
    squareDivs = [];
    container.innerHTML = ""

for (i=0;i <= boxes; i++){
    const div = document.createElement("div");
    squareDivs.push(div);
    div.classList.add("square50");
    container.appendChild(div);
}

squareDivs.forEach((div) => {
    div.addEventListener("mouseenter" , () => {
        div.classList.remove(".white")
         div.style.backgroundColor = getRandomColor();
    })
    });
}
}
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.body.addEventListener("keypress", checkKeyPressed, false);



function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
        squareDivs.forEach((div) => {
    div.addEventListener("mouseenter" , () => {
         div.classList.add(".white");
    })
    });
        


    }
}
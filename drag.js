let draggables = document.querySelectorAll('.box-container');
let prioritySecEl = document.getElementById("prioritySec");
let thanksSecEl = document.getElementById("thanksSec");

console.log(draggables);
let arrLength = draggables.length;
console.log(arrLength);

function allowDrop(ev) {
    ev.preventDefault();
    
  }
  
  function drag(ev) {
    ev.target.className+= ' hold';
    ev.dataTransfer.setData("text", ev.target.id);
    
  }
  
  function drop(ev) {
    ev.preventDefault();
    console.log(ev.target.id)
    let dropableEl = document.getElementById(ev.target.id)
    dropableEl.textContent = "";
    arrLength -= 1;
    //console.log(arrLength);
    if(arrLength===0){
      prioritySecEl.classList.add("priority-container", "d-none");
      thanksSecEl.classList.add("thanks-section", "d-flex", "flex-column", "justify-content-around");
    }
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
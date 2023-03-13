function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = document.getElementById(ev.dataTransfer.getData("text"));

  if (data.className.includes(ev.target.id)) {
    //correct box
    ev.target.appendChild(data);
  } 
}

function solution_click() {
  // console.log("You have clicked on: solutionButton");
  alert("We have not implemented unknown solutions yet, there is nothing to check.");
}

function help_click() {
  alert("This is the help page.");
  if (ev.target.id == trash) document.getElementById(target.id).remove();
  
}

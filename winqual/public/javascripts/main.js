function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = document.getElementById(ev.dataTransfer.getData("text"));  

  if (data.className.includes(ev.target.id)) { //correct box -> make a copy of element
    var copy = data.cloneNode(true);
    copy.id += "_copy";
    console.log(copy.id);
    ev.target.appendChild(copy);
  } else if (ev.target.id == "trash") { // trash can -> remove element from document
    data.remove();
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

function id_tostring(x, y) {
  let str = x.toString() + y.toString() + "";
  return str;
}

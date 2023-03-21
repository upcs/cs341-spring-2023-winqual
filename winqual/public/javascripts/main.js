function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();

  //variables to reference the box and the img of this event
  var dropBox = ev.target;
  var img = document.getElementById(ev.dataTransfer.getData("text"));

  //check that we are in the right dropBox
  if (dropBox.classList.item(1) == img.classList.item(1)) {
   
    var numElems = dropBox.getElementsByTagName("*").length; 
    //only add elements if dropBox is empty
    if (numElems == 0) {
      var imgCopy = img.cloneNode(true);
      imgCopy.id += "_copy";
      dropBox.appendChild(imgCopy);
    }
  } 
}

function solution_click() {
  // console.log("You have clicked on: solutionButton");
  alert("We have not implemented unknown solutions yet, there is nothing to check.");
}

function help_click() {
  alert("This is the help page.");
}

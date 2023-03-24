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

    //console.log(numElems);
    
    if (numElems == 0) { // only add elements if dropBox is empty OR
      var imgCopy = img.cloneNode(true);
      imgCopy.id += "_copy";
      dropBox.appendChild(imgCopy);
    } else if (numElems == 1) { // if there is one element AND
      var elem = document.getElementById(dropBox.id).children[0];
      if (elem.id == "A2_copy") { // the element is NaOH
        
      }
    }
  //check if we are at the trash can
  } else if (dropBox.id.includes("trash") && img.id.includes("_copy")) {
    console.log(img.id);
    img.remove();
  }
}

function solution_click() {
  alert("We have not implemented this functionality yet :)");
}

function help_click() {
  alert("We are still working on implementing the help page :)");
  if (ev.target.id == trash) document.getElementById(target.id).remove(); 
}

/* "Check Solutions" popup */
$ = function(id) {
  return document.getElementById(id);
}
/* Opens the popup on click ("Check Solutions" button) */
var show = function(id) {
    $(id).style.display = 'block';
}
/* Closes the popup on click ("Close" button) */
var hide = function(id) {
    $(id).style.display = 'none';
}
/* Closes the popup whenever you click anywhere else on the screen  */
window.onload = function() {
  document.onclick = function(e) {
    if (e.target.id == 'solutionsPopup') {
      solutionsPopup.style.display = 'none';
    }
  }
}
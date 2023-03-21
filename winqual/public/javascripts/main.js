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
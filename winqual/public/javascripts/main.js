
 
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
 alert("Nothing yet");

}


function help_click() {
  alert("This is the help page.");
  if (ev.target.id == trash) document.getElementById(target.id).remove();
  
}


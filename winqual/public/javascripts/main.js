function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();

  var dropBox = ev.target;
  var img = document.getElementById(ev.dataTransfer.getData("text"));
  
  if (dropBox.id.includes("_copy")) { //god I hate this, basically its setting the img as the target, this if statement corrects it to be the dropBox
    if (dropBox.id.includes("A")) { //we are at anion dropBox
      dropBox = document.getElementById("anion");
      //console.log("Checkpoint 1");
    } else { //we are at cation dropBox
      dropBox = document.getElementById("cation");
    }
  }

  if (dropBox.classList.item(1) == img.classList.item(1)) { //make sure img type matches dropBox type, anion or cation
    var numElems = dropBox.getElementsByTagName("*").length;
    //console.log("Checkpoint 2");
    
      if (numElems == 0) { //dropBox is empty
        var imgCopy = img.cloneNode(true);
        imgCopy.id += "_copy";
        dropBox.appendChild(imgCopy); 

      } else if (numElems == 1) { //there is 1 img already in dropBox
        const existingImg = dropBox.firstChild; 
        //console.log("last child: " + dropBox.lastChild.id);
        //console.log("first child: " + dropBox.firstChild.id);

        if (existingImg.id.includes("A2") && img.id.includes("A2")) { //if existingImg and img are both NaOH (or A2) then replace with NaOH XS
          existingImg.id = "A5_copy";
          existingImg.src = "images/solutions_IMGS/9_unknown.jpg";
          const rm = document.getElementById("A2_copy");
          //rm.remove();
          //console.log("Are you activating?");
          return;

        } else { //all other existingImgs just get replaced
          const tempId = existingImg.id;
          existingImg.id = img.id + "_copy";
          existingImg.src = img.src;
          const rm = document.getElementById(tempId);
          //rm.remove();
          //console.log("what is supposed to go here");
        } 
      }

    } else if (dropBox.id.includes("trash") && img.id.includes("_copy")) { 
      img.remove(); 

    } else { return; }
}



function help_click() {
  alert("We are still working on implementing the help page :)");
  if (ev.target.id == trash) document.getElementById(target.id).remove(); 
}

/* "Check Solutions" popup */
$ = function(id) {
  return document.getElementById(id);
}

/* 
* Opens the popup on click ("Check Solutions", "Help", and "Credits" button) 
* Closes popup on following click
*/
var show = function(id) {
  var element = document.getElementById(id);
  if (element.style.display == "none") {
    element.style.display = "block";
  }
  else {
    element.style.display = "none";
  }
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
    if (e.target.id == 'overlay') {
      overlay.style.display = 'none';
    }
    if (e.target.id == 'credits') {
      credits.style.display = 'none';
    }
  }
}
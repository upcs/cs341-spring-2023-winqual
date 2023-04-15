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

  if (dropBox.classList.item(1) == img.classList.item(1)) {
    var numElems = dropBox.getElementsByTagName("*").length;
    /* make sure box is empty */
    if (numElems == 0) {
      var imgCopy = img.cloneNode(true);
      imgCopy.id += "_copy";
      dropBox.appendChild(imgCopy);

      /* check for NaOH being added in xs */
    } else if (numElems == 1) { // && img.id == "A2"
      // const existingImg = document.getElementById("A2_copy");
      console.log("A");
      const existingImg = dropBox.item(0);
      const rm = document.getElementById(existingImg.id);
      
      

      if (existingImg.id.includes(img.id)) { //NaOH + NaOH = NaOHXS
	// const rm = document.getElementById("A2_copy");
	// const rm = document.getElementById(existingImg.id);
	existingImg.id = "A5_copy";
        existingImg.src = "images/solutions_IMGS/9_unknown.JPG";
        rm.remove();
      } else { // all img != NaOH (A5) get replaced
	existingImg.id = img.id + "_copy";
	console.log(existingImg.id);
      }

    }
  } else if (dropBox.id.includes("trash") && img.id.includes("_copy")) {
    img.remove();
  }
  else{return;}
}

function find_filepath(id) {

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
* Opens the popup on click ("Check Solutions" button) and ("Help" button) 
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
  }
}
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
    //make sure box is empty
    if (numElems == 0) {
      var imgCopy = img.cloneNode(true);
      imgCopy.id += "_copy";
      dropBox.appendChild(imgCopy);

      //check for NaOH being added in xs
    } 
    else if (numElems == 1 && img.id == "A2") {
      const existingImg = document.getElementById("A2_copy");
      
      if (existingImg.id !== null) {
        //currently 
        existingImg.src = "images/compound_IMGS/NaI_img.JPG";
        existingImg.id = "A5_copy";
       
        console.log("bitch it worked");
      }
    }

  } else if (dropBox.id.includes("trash") && img.id.includes("_copy")) {
    img.remove();
  }
  else{return;}
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
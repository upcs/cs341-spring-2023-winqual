function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  //var clone = ev.target.id.cloneNode(true);
  //console.log(clone);
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  //var str;
  var data = document.getElementById(ev.dataTransfer.getData("text"));
  //console.log(data.className);
  //console.log(ev.target.className);

  if (data.className.includes(ev.target.id)) {
    //correct box
    ev.target.appendChild(data);
  } else if (ev.target.id == trash) {
    document.getElementById(target.id).remove();
  }
}

function id_tostring(x, y) {
  let str = x.toString() + y.toString() + "";
  return str;
}

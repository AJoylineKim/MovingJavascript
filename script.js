let id = myMove;
function myMove() {
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

let animate = resetMove;
function resetMove() {
	const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
     pos++; 
      elem.style.top = pos + "px";
      elem.style.left = pos + "px"; 
}

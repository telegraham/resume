document.addEventListener("DOMContentLoaded", onDomContentLoaded);

function onDomContentLoaded(){
  document.querySelectorAll("a").forEach(bindHover);
}

function bindHover(anchor){
  anchor.addEventListener("mouseover", onHover);
  anchor.addEventListener("mouseout", onHover);
}

function onHover(event){
  event.target.style.transformOrigin = targetPositionX(event) + "px";
}

function targetPositionX(event){
  return event.pageX - event.target.getBoundingClientRect().left;
}
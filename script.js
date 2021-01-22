var circle=document.querySelector("#circle")

window.addEventListener('mousemove',function(details){
    circle.style.left=details.pageX+"px";
    circle.style.top=details.pageY+"px";
})
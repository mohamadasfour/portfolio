let element = document.getElementById("target-id");
document.addEventListener("scroll", function() { 
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop
    if(window.innerHeight/2 >= scrollAmt)
    element.style.visibility = "hidden";
    else
    element.style.visibility = "visible";
});
// window.onscroll = () => {
//     const Ypos = window.pageYOffset || document.documentElement.scrollTop;
    
//     if(Ypos < 100) document.getElementById("target-id").style.visibility = "hidden";
   
//    else if (Ypos > 150) document.getElementById("target-id").style.visibility = "visible";
    
//   }, false;
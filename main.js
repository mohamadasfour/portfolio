// function testScroll(ev){
//     if(window.pageYOffset>100)alert('User has scrolled at least 400 px!');
// }
// window.onscroll=testScroll

// function scrollFunction() {
//     document.getElementById("target-id").style.visibility = "show";   //To hide the element.
// }

// window.onscroll = scrollFunction;
// window.scroll = () => {

//     const Ypos = window.pageYOffset;
  
//     if(Ypos < 150) console.log('hiddin'),document.getElementById("target-id").style.visibility = "hidden";
   
//     else{
//         document.getElementById("target-id").style.visibility = "visible";
//     }
  
//   }
//   scroll();
window.onscroll = () => {
    const yPos = window.pageYOffset;
    const socialContainer = document.getElementById('social-container');
    (yPos > 200) ? socialContainer.classList.add('shown') : socialContainer.classList.remove('shown');
  }
  onscroll();


var navToggle = document.querySelector("#main-nav-toggle");
var navList = document.querySelector("#main-nav-list");

//always check to see if elements exist before writing js involving those elements
if (navToggle && navList){
  navToggle.addEventListener('click',function(){
    //this checks to see if the element has the class of close on it
    if(navToggle.classList.contains('close')) {
      //if elements ave the close class that means the nav is open so to close it we need to remove the open class from the nav list and remove the close class fom the hamburger
      navToggle.classList.remove('close');
      navList.classList.remove('open');
    } else {
      navToggle.classList.add('close');
      navList.classList.add('open');
    }
  })
}

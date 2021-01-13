// Slide 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-show");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// End Slide

// Scroll Header
if (document.querySelector("header.wrapper-header1") === null) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var menu = document.getElementsByClassName("wrapper-header");
      var menu = menu[0];
      var height = pageYOffset;
      if (height  > 300){
        menu.classList.add("bg-header")
      }
      else{
        menu.classList.remove('bg-header');
      }
    })
  })
}
// End Scroll Header

//Zoom Footer
    function zoomfooter() {
      let window = document.documentElement.clientHeight;
      let body = document.getElementById("wrapper-body").offsetHeight;
      let footer = document.getElementById("wrapper-footer").offsetHeight;
      let footer1 = document.getElementById("wrapper-footer");
      let totalweb;
        totalweb = body + footer;
        if(window > totalweb){
            footer1.classList.add('fixwindow');
          }
          else{
            footer1.classList.remove('fixwindow');
          }
    }
    zoomfooter();
    window.onresize = function () {
      zoomfooter();
  }
// End zoom footer

// showMenu
var showMenu = (toggleId, navId)=>{
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')


function myHandle() {
  document.getElementById("dropdown_menu").classList.toggle("show-sub");
  document.getElementById("handle-menu").classList.toggle("dropdown_icon")
}

// Choose color 
  function color(n) {
    var chooseColor = document.getElementsByClassName("color-choose");
    for (var i = 0; i < chooseColor.length; i++){
    chooseColor[i].classList = chooseColor[i].className.replace(" active", "");
    }
    chooseColor[n].className += " active";
}
// End choose color

// Choose Size
function size(n) {
    var chooseSize = document.getElementsByClassName("size-choose");
    for (var i = 0; i < chooseSize.length; i++){
    chooseSize[i].classList = chooseSize[i].className.replace(" active", "");
    }
    chooseSize[n].className += " active";
}
// End choose size
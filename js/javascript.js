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
    window.addEventListener("scroll", function () {
        var menu = document.getElementsByClassName('wrapper-header');
        var menu = menu[0];
        var height = pageYOffset;
        if (height  > 300){
            menu.classList.add("bg-header")
        }
        else{
            menu.classList.remove('bg-header');
        }
    })
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
function showMenu() {
  var x = document.getElementById("myNav");
  if (x.className === "navigation") {
    x.className += " responsive";
  }else {
    x.className = "navigation";
  }
}
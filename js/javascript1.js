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
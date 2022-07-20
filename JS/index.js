//  Dark mode Part
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Navbar Scroll 

// $(document).ready(function(){
//   $(window).scroll(function(){
//     if($(window).scrollTop()>300){
//       $('nav-main-container').addClass('black');
//     }
//     else{
//       $('nav-main-container').removeClass('black');
//     }
//   });
// });

// ---------------------------------------------------------------
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
//     document.getElementById("nav-main-container").style.background = "#501e27";
//   } else {
   
//     document.getElementById("nav-main-container").style.background = "none";
//   }
// }

  // Slider Part
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
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].className += " active";
  }
  window.onload= function () {
   setInterval(function(){ 
       plusSlides(1);
   }, 3000);
   }
  
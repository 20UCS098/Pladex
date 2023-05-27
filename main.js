//navbar responsive

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const close = document.getElementById('closebutton');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

hamburger.addEventListener('click', () => {
    close.classList.toggle('closeit');
    hamburger.classList.toggle('hamburgerone');
});
close.addEventListener('click', () => {
    close.classList.toggle('closeit');
    navUL.classList.toggle('show');
    hamburger.classList.toggle('hamburgerone');
});

//image slider//

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//image slider our events//
var slideIndexNew = 0;
showSlidesNew();

function showSlidesNew() {
    var j;
    var slidesNew = document.getElementsByClassName("mySlides1");
    for (j = 0; j < slidesNew.length; j++) {
        slidesNew[j].style.display = "none";
    }
    slideIndexNew++;
    if (slideIndexNew > slidesNew.length) { slideIndexNew = 1 }
    slidesNew[slideIndexNew - 1].style.display = "block";
    setTimeout(showSlidesNew, 3000); // Change image every 2 seconds
}



// //stciky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        this.document.querySelector('#navbar').style.opacity = 0.9;

    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

// //Get the button:
mybutton = document.getElementById("backtotop");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        mybutton.style.display = "block";
        console.log("hello");
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//faq//
$('.faq-heading').click(function() {

    $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});

//our events//
//  $('.owl-carousel').owlCarousel({
//   loop:false,
// stagePadding: 15,
//   margin:10,
//   nav:true,
// navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
//   responsive:{
//       0:{
//           items1:1
//       },
//       640:{
//           items1:2
//       },
//     960:{
//           items1:3
//       },
//       1200:{
//           items1:4
//       }
//   }
// })

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});
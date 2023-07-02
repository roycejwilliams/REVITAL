/* Home.HTML */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}); 

  
var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 8;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
    
  
        const cycleWords = document.getElementById("cycle-words");
        var count = 0;
        
        const words = [
          " Packaging Design",
          " Website Development",
          " Brand Identity",
          " Style Guidelines",
          " Campaign Execution",
          " Digital Media",
          " Logo Design",
          " Consumer Research",
          " Brand Strategy",
          " UX/UI"
        ];
        
         setTimeout(
           function showWord() { 
             cycleWords.innerHTML = words[count];
             cycleWords.animate([
                 { opacity: '1', width: '0%' },
                 { opacity: '1', width: '100%' }
             ],{
                 duration: 2000,
                 iterations: 1
             });
             count = (count + 1) % words.length;
             setTimeout(showWord, 2000);
           }, 
         0);
        
        
/*Slide function*/
var swiper = new Swiper('#carousel', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.item',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();



/*on Scroll*/


function animateOnScroll() {
  var animatedElements = document.querySelectorAll('.animate-element');
  
  function checkInView() {
    for (var i = 0; i < animatedElements.length; i++) {
      var element = animatedElements[i];
      var distanceInView = element.getBoundingClientRect().top - window.innerHeight + 20;
      
      if (distanceInView < 0) {
        element.classList.add('fade-in-animation');
      } else {
        element.classList.remove('fade-in-animation');
      }
    }
  }
  
  window.addEventListener('scroll', checkInView);
}

// Call the function to trigger animations on scroll
animateOnScroll();


// page transitions 
function loaded() {
  document.body.classList.add('loaded');
}

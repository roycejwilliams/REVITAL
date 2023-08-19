// Mobile Menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const menuButton = document.querySelector(".menu-btn");

const toggleMenu = () => {
  if (menuButton.innerHTML === "Menu") {
    menuButton.innerHTML = "Close";
  } else {
    menuButton.innerHTML = "Menu";
  }

  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menuButton.addEventListener("click", toggleMenu);

// word carousel
const text = document.getElementById("text");
const newDom = "";
const animationDelay = 8;

for (let i = 0; i < text.innerText.length; i++) {
  newDom +=
    '<span class="char">' +
    (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
    "</span>";
}

text.innerHTML = newDom;
const length = text.children.length;

for (let i = 0; i < length; i++) {
  text.children[i].style["animation-delay"] = animationDelay * i + "ms";
}

const cycleWords = document.getElementById("cycle-words");
const count = 0;

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
  " UX/UI",
];

setTimeout(function showWord() {
  cycleWords.innerHTML = words[count];
  cycleWords.animate(
    [
      { opacity: "1", width: "0%" },
      { opacity: "1", width: "100%" },
    ],
    {
      duration: 2000,
      iterations: 1,
    }
  );
  count = (count + 1) % words.length;
  setTimeout(showWord, 2000);
}, 0);

/*on Scroll*/

function animateOnScroll() {
  const animatedElements = document.querySelectorAll(".animate-element");

  function checkInView() {
    for (const i = 0; i < animatedElements.length; i++) {
      const element = animatedElements[i];
      const distanceInView =
        element.getBoundingClientRect().top - window.innerHeight + 20;

      if (distanceInView < 0) {
        element.classList.add("fade-in-animation");
      } else {
        element.classList.remove("fade-in-animation");
      }
    }
  }

  window.addEventListener("scroll", checkInView);
}

// Call the function to trigger animations on scroll
animateOnScroll();

// page transitions
function loaded() {
  document.body.classList.add("loaded");
}

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementsByClassName("picture");
  video.play();
});

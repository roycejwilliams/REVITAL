/*slide*/

var index = 0;
const imgs = document.getElementsByClassName('mySlides');

function changeBanner() {
  [].forEach.call(imgs, function(v, i) {
    imgs[i].hidden = i !== index;
  });
  index = (index + 1) % imgs.length;
}

window.onload = function() {
  setInterval(changeBanner, 500);
};


// Us 

const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

var load = 0;
var int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadingText.innerHTML = `${load}%`;
}

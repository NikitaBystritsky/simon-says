const buttonUp = document.querySelector('.up-button');

var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

buttonUp.addEventListener("click", scrollToTop);

document.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    buttonUp.classList.remove('no-button');
    buttonUp.classList.add('up-button');
  } else {
    buttonUp.classList.remove('up-button');
    buttonUp.classList.add('no-button');
  }
}
);

const button_up = document.querySelector('.up-button');

var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

button_up.addEventListener("click", scrollToTop);

    document.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            button_up.classList.remove('no-button');
            button_up.classList.add('up-button');
        } else {
            button_up.classList.remove('up-button');
            button_up.classList.add('no-button');
        }
    }
    );



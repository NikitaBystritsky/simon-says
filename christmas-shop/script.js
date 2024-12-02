
const burgerButton = document.querySelector('.burger');
let firstBar = document.querySelector('.burger-line');
let secondBar = document.querySelector('.burger-lin');
let mobileNav = document.querySelector('.mobile-nav');
let body = document.querySelector('body')
let navAbout = document.querySelector('.burger-about')
let navBest = document.querySelector('.burger-best')
let navContacts = document.querySelector('.burger-contacts')
let navGifts = document.querySelector('.burger-gifts')

burgerButton.addEventListener('click', function () {
  firstBar.classList.toggle('first');
  secondBar.classList.toggle('second');
  mobileNav.classList.toggle('is-active');
  body.classList.toggle('no-body-scroll');
});

navAbout.addEventListener('click', function () {
  firstBar.classList.toggle('first');
  secondBar.classList.toggle('second');
  mobileNav.classList.toggle('is-active');
  body.classList.toggle('no-body-scroll');
});

navBest.addEventListener('click', function () {
  firstBar.classList.toggle('first');
  secondBar.classList.toggle('second');
  mobileNav.classList.toggle('is-active');
  body.classList.toggle('no-body-scroll');
});

navContacts.addEventListener('click', function () {
  firstBar.classList.toggle('first');
  secondBar.classList.toggle('second');
  mobileNav.classList.toggle('is-active');
  body.classList.toggle('no-body-scroll');
});

navGifts.addEventListener('click', function () {
  firstBar.classList.toggle('first');
  secondBar.classList.toggle('second');
  mobileNav.classList.toggle('is-active');
  body.classList.toggle('no-body-scroll');
});

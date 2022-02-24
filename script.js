const langDropDown = document.getElementById('lang-click');
const langList = document.getElementById('lang-menu');

const frameworkDropDown = document.getElementById('frameworks-click');
const frameworkList = document.getElementById('framework-menu');

const skillDropDown = document.getElementById('skills-click');
const skillList = document.getElementById('skill-menu');

langDropDown.addEventListener('click', () => {
  // console.log('clicked');
  langList.classList.toggle('visible');
  setTimeout(() => {
    langList.classList.toggle('showed');
  }, 500);
});

frameworkDropDown.addEventListener('click', () => {
  // console.log('clicked');
  frameworkList.classList.toggle('visible');
  setTimeout(() => {
    frameworkList.classList.toggle('showed');
  }, 500);
});

skillDropDown.addEventListener('click', () => {
  // console.log('clicked');
  skillList.classList.toggle('visible');
  setTimeout(() => {
    skillList.classList.toggle('showed');
  }, 500);
});

const hamBtn = document.getElementById('hamBtn');
const mobileMenu = document.getElementById('links');
const closeBtn = document.getElementById('hamBtnClose');
const mobileLinks = document.getElementById('mobile-menu');

hamBtn.addEventListener('click', () => {
  // console.log('clicked');
  mobileMenu.classList.add('visible');
  setTimeout(() => {
    mobileMenu.classList.add('showed');
  }, 100);
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('showed');
  setTimeout(() => {
    mobileMenu.classList.remove('visible');
  }, 100);
});

mobileLinks.addEventListener('click', () => {
  mobileMenu.classList.remove('showed');
  setTimeout(() => {
    mobileMenu.classList.remove('visible');
  }, 100);
});
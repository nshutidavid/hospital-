const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
const textEl = document.getElementById('text');

openNavBtn.addEventListener('click', () => {
  navItems.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
});

const closeNav = () => {
  navItems.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);

/* text effect*/

const text = 'for Everyone ';
let idx = 1;
let speed = 300 / 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  //setTimeout(writeText, 400); hard coded
  setTimeout(writeText, speed);
}

//closing the nav bar
if (window.innerWidth < 1024) {
  document.querySelectorAll('#nav__items li a').forEach((navItem) => {
    navItem.addEventListener('click', () => {
      closeNav();
    });
  });
}

//change navbar color

window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});

//from sliderJs for testimonials
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  //Responsive Breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width >= 600px
    600: {
      slidesPerView: 2,
    },
    // when window width >= 600px
    1024: {
      slidesPerView: 3,
    },
  },
});

const openMenuBtn = document.querySelector('.open-menu-svg');
const closeMenuBtn = document.querySelector('.close-menu-svg');
const mdHeaderNav = document.querySelector('.small-header-nav');
const mdHeaderNavLinks = document.querySelectorAll('.md-header-nav-li');

const openMenuBtnFunc = () => {
  mdHeaderNav.classList.add('d-flex');
  openMenuBtn.classList.add('d-none');
};

const closeMenuBtnFunc = () => {
  mdHeaderNav.classList.remove('d-flex');
  openMenuBtn.classList.remove('d-none');
};

mdHeaderNavLinks.forEach((mdHeaderNavLinks) => {
  mdHeaderNavLinks.addEventListener('click', function () {
    mdHeaderNav.classList.remove('d-flex');
    openMenuBtn.classList.remove('d-none');
  });
});

const openMenu = document.querySelector('.open-menu-svg');
openMenu.addEventListener('click', openMenuBtnFunc);

const closeMenu = document.querySelector('.close-menu-svg');
closeMenu.addEventListener('click', closeMenuBtnFunc);

const openMenuBtn = document.querySelector('.open-menu-svg');
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

mdHeaderNavLinks.forEach((mobileMenuLinks) => {
  mobileMenuLinks.addEventListener('click', () => {
    mdHeaderNav.classList.remove('d-flex');
    openMenuBtn.classList.remove('d-none');
  });
});

const openMenu = document.querySelector('.open-menu-svg');
openMenu.addEventListener('click', openMenuBtnFunc);

const closeMenu = document.querySelector('.close-menu-svg');
closeMenu.addEventListener('click', closeMenuBtnFunc);

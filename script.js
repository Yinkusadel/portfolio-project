const openMenuBtn = document.querySelector('.open-menu-svg');
const closeMenuBtn = document.querySelector('.close-menu-svg');
const mdHeaderNav = document.querySelector('.small-header-nav');
const mdHeaderNavLinks = document.querySelectorAll('.md-header-nav-li');

const openMenuBtnFunc = () => {
  mdHeaderNav.classList.add('d-flex');
};

const closeMenuBtnFunc = () => {
  mdHeaderNav.classList.remove('d-flex');
};

for (let i = 0; i < mdHeaderNavLinks.length; i+=1) {
  mdHeaderNavLinks[i].addEventListener('click', function () {
    mdHeaderNav.classList.remove('d-flex');
  });
}

const openMenu = document.querySelector('.open-menu-svg');
openMenu.addEventListener('click', openMenuBtnFunc);

const closeMenu = document.querySelector('.close-menu-svg');
closeMenu.addEventListener('click', closeMenuBtnFunc);

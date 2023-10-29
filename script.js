const openMenuBtnFunc = () => {
  mdHeaderNav.classList.add('d-flex');
  openMenuBtn.classList.add('d-none');
};

const closeMenuBtnFunc = () => {
  mdHeaderNav.classList.remove('d-flex');
  openMenuBtn.classList.remove('d-none');
};

mdHeaderNavLinks.forEach((mobileMenuLinks) => {
  mobileMenuLinks.addEventListener('click', function () {
    mdHeaderNav.classList.remove('d-flex');
    openMenuBtn.classList.remove('d-none');
  });
});

const openMenu = document.querySelector('.open-menu-svg');
openMenu.addEventListener('click', openMenuBtnFunc);

const closeMenu = document.querySelector('.close-menu-svg');
closeMenu.addEventListener('click', closeMenuBtnFunc);

const projectCardImages = [
  'images/tonic.png',
  'images/tonic2.png',
  'images/multipost.png',
  'images/multipost2.png',
  'images/facebook.png',
  'images/nature.png',
];
let imageIndex = 0;

popUpCardImage.setAttribute('src', 'images/tonic.png');

popUpCardCloseBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.add('d-none');
  PopUpCardContainer.classList.remove('d-flex');
});

seeProjectTonicBtn.addEventListener('click', function () {
  imageIndex = 0;

  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages[imageIndex];
});

seeProjectTonicTwoBtn.addEventListener('click', function () {
  imageIndex = 1;

  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages[imageIndex];
});

multiPostPopup.addEventListener('click', function () {
  imageIndex = 2;

  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages[imageIndex];
});

multiPostTwoPopup.addEventListener('click', function () {
  imageIndex = 3;

  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages[imageIndex];
});

faceBookPopup.addEventListener('click', function () {
  imageIndex = 4;

  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages[imageIndex];
});

naturePopup.addEventListener('click', function () {
  imageIndex = 5;

  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages[imageIndex];
});

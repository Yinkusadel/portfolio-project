const openMenuBtn = document.querySelector('.open-menu-svg');
const mdHeaderNav = document.querySelector('.small-header-nav');
const mdHeaderNavLinks = document.querySelectorAll('.md-header-nav-li');

const PopUpCardContainer = document.querySelector('.popup-card-container');
const seeProjectTonicBtn = document.querySelector('.tonic-popup');
const seeProjectTonicTwoBtn = document.querySelector('.tonic-two-popup');
const multiPostPopup = document.querySelector('.multipost-popup');
const multiPostTwoPopup = document.querySelector('.multipost-two-popup');
const faceBookPopup = document.querySelector('.facebook-popup');
const naturePopup = document.querySelector('.nature-popup');

const popUpCardImage = document.querySelector('.popup-card-image');
const popUpCardCloseBtn = document.querySelector('.popup-card-close-btn');

// const projectCardImages = [
//   'images/tonic.png',
//   'images/tonic2.png',
//   'images/multipost.png',
//   'images/multipost2.png',
//   'images/facebook.png',
//   'images/nature.png',
// ];++

const projectCardImages = {
  zero: 'images/tonic.png',
  one: 'images/tonic2.png',
  two: 'images/multipost.png',
  three: 'images/multipost2.png',
  four: 'images/facebook.png',
  five: 'images/nature.png',
};

popUpCardImage.setAttribute('src', 'images/tonic.png');

// const popupImageTonicPng = " "
// const popupImageTonicPng2 = " "
// const popupImageMultiPostPng = " "
// const popupImageMultiPostPng2 = " "
// const popupImageFacebookPng = " "
// const popupImageNaturePng = " "

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

popUpCardCloseBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.add('d-none');
  PopUpCardContainer.classList.remove('d-flex');
});

seeProjectTonicBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.zero;
});

seeProjectTonicTwoBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.one;
});

multiPostPopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.two;
});

multiPostTwoPopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.three;
});

faceBookPopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.four;
});

naturePopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.five;
});

// const projects = [
//   {
//     title: "hjfjfj",
//     description: "jfjf fjfjf f",
//     screenshot:  'images/tonic.png',
//     tags: ['ruby', 'react', 'javascript']

//   }
// ]

// const generateProjectCard = (screenshot, tags) => `
// <li class="cards">
// <figure>
//   <img
//     class="card-images"
//     src="${screenshot}"
//     title="tonic 2 image"
//     alt="tonic project"ta
//   />
//   <figcaption class="card-text">Multi-Post Stories Gain+Glory</figcaption>
// </figure>

// <ul class="card-projects">
// ${tags.map(tag => `<li>${tag}</li>`)}
// </ul>

// <div class="card-button">
//   <button class="see-projects tonic-two-popup">See Projects</button>
// </div>
// </li>`

// projects.map(project => (generateProjectCard(project.screenshot, project.tags)))

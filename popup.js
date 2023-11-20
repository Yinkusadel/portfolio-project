const seeProjectTonicBtn = document.querySelector('.tonic-popup');
const seeProjectTonicTwoBtn = document.querySelector('.tonic-two-popup');
const multiPostPopup = document.querySelector('.multipost-popup');
const multiPostTwoPopup = document.querySelector('.multipost-two-popup');
const faceBookPopup = document.querySelector('.facebook-popup');
const naturePopup = document.querySelector('.nature-popup');
const popUpCardContainerNew = document.querySelector('.popup-card-container');
const popUpCardImage = document.querySelector('.popup-card-image');

popUpCardImage.setAttribute('src', 'images/tonic.png');

const projectCardImages = {
  zero: 'images/tonic.png',
  one: 'images/tonic2.png',
  two: 'images/multipost.png',
  three: 'images/multipost2.png',
  four: 'images/facebook.png',
  five: 'images/nature.png',
};

seeProjectTonicBtn.addEventListener('click', function tonicBtnClickEvent() {
  popUpCardContainerNew.classList.remove('d-none');
  popUpCardContainerNew.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.zero;
});

seeProjectTonicTwoBtn.addEventListener('click', function tonicTwoBtnClickEvent() {
  popUpCardContainerNew.classList.remove('d-none');
  popUpCardContainerNew.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.one;
});

multiPostPopup.addEventListener('click', function multiPopupClickEvent() {
  popUpCardContainerNew.classList.remove('d-none');
  popUpCardContainerNew.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.two;
});

multiPostTwoPopup.addEventListener('click', function multiPopupTwoClickEvent() {
  popUpCardContainerNew.classList.remove('d-none');
  popUpCardContainerNew.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.three;
});

faceBookPopup.addEventListener('click', function fbPopupClickEvent() {
  popUpCardContainerNew.classList.remove('d-none');
  popUpCardContainerNew.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.four;
});

naturePopup.addEventListener('click', function naturePopupClickEvent() {
  popUpCardContainerNew.classList.remove('d-none');
  popUpCardContainerNew.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.five;
});

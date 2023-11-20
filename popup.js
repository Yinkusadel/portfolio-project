const seeProjectTonicBtn = document.querySelector('.tonic-popup');
const seeProjectTonicTwoBtn = document.querySelector('.tonic-two-popup');
const multiPostPopup = document.querySelector('.multipost-popup');
const multiPostTwoPopup = document.querySelector('.multipost-two-popup');
const faceBookPopup = document.querySelector('.facebook-popup');
const naturePopup = document.querySelector('.nature-popup');
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
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.zero;
});

seeProjectTonicTwoBtn.addEventListener('click', function tonicTwoBtnClickEvent() {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.one;
});

multiPostPopup.addEventListener('click', function multiPopupClickEvent() {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.two;
});

multiPostTwoPopup.addEventListener('click', function multiPopupTwoClickEvent() {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.three;
});

faceBookPopup.addEventListener('click', function fbPopupClickEvent() {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.four;
});

naturePopup.addEventListener('click', function naturePopupClickEvent() {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.five;
});

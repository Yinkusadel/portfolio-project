import projectCardAttributes from './attributes.js';

const popUpCardContainerNew = document.querySelector('.popup-card-container');

const generatePopupProjectCard = (
  imgSrc,
  imgTitle,
  imgAlt,
  cardDescription,
  tags,
  btnHrefOne,
  btnHrefTwo,
  popupNavPrevious,
  popupNavNext,
) => `

<div class="popup-card d-flex">
<div class="popup-card-close-btn-container d-flex">
  <svg
    class="popup-card-close-btn"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
  >
    <path
      d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
    ></path>
  </svg>
</div>
  <img
    class="popup-card-image"
    src="${imgSrc}"
    title="${imgTitle}"
    alt="${imgAlt}"
  />

<div class="project-card-details d-flex">
  <div class="popup-card-text">${cardDescription}</div>

  <ul class="popup-card-projects d-flex">
  ${tags.map((tag) => `<li class="popup-card-projects-li d-flex">${tag}</li>`).join('')}
  </ul>

  <div class="popup-loremipsum-text-container d-flex">
    <p class="popup-loremipsum-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it 1960s with the relea
    </p>
  </div>

  <div class="popup-navigate md-d-flex d-none "> 
    <button class="popup-nav-previous md-d-flex" id="${popupNavPrevious}">
      <svg class="svg-nav-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      <span>previous</span>
    </button> 
    <button class="popup-nav-next md-d-flex" id="${popupNavNext}">
      <span>next</span>
      <svg class="svg-nav-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button> 
    </div>

  <div class="popup-card-button d-flex">
    <a href="${btnHrefOne}" class="popup-button d-flex justify-center" target="_blank">
      See Live<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
          fill="white"
        />
      </svg>
    </a>
    <a href="${btnHrefTwo}" class="popup-button d-flex justify-center" target="_blank">
      See Source<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_48_2223)">
          <g clip-path="url(#clip1_48_2223)">
            <path
              d="M20.9992 9.46114C20.9992 8.32124 20.6332 7.25043 19.9345 6.31779C20.2007 5.41969 20.2672 4.27979 20.2007 2.96718C20.1674 2.41451 19.7349 2 19.2025 2C18.9031 2 16.3744 2.03454 14.9105 3.38169C13.6461 3.1399 12.3153 3.1399 11.0177 3.38169C9.58698 2.03454 7.05833 2 6.72561 2C6.19326 2 5.76073 2.41451 5.72746 2.96718C5.62764 4.27979 5.72746 5.41969 5.99363 6.31779C5.29492 7.28497 4.92894 8.35579 4.92894 9.46114C4.92894 11.8791 6.72561 14.0553 9.45389 15.0915C9.35407 15.2988 9.28753 15.5406 9.22099 15.7824C6.32635 15.4715 4.96221 12.7427 4.89566 12.639C4.66276 12.1209 4.06387 11.9136 3.5648 12.19C3.06572 12.4318 2.86609 13.0535 3.13226 13.5717C3.19881 13.7444 5.02875 17.4404 9.05463 17.8549V20.9637C9.05463 21.5509 9.48716 22 10.0528 22H15.8753C16.441 22 16.8735 21.5509 16.8735 20.9637V16.8532C16.8735 16.2314 16.7404 15.6442 16.5075 15.1261C19.2025 14.0553 20.9992 11.9136 20.9992 9.46114Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clippath id="clip0-48-2223">
            <rect width="18" height="20" fill="white" transform="translate(3 2)" />
          </clippath>
          <clippath id="clip1-48-2223">
            <rect width="18" height="20" fill="white" transform="translate(3 2)" />
          </clippath>
        </defs>
      </svg>
    </a>
  </div>
</div>
</div>`;

const updatePopupContent = (id) => {
  const popupIndex = projectCardAttributes.findIndex((attr) => attr.id === id);
  const newPopupAttributes = projectCardAttributes[popupIndex];

  if (newPopupAttributes) {
    const projectCard = generatePopupProjectCard(
      newPopupAttributes.src,
      newPopupAttributes.title,
      newPopupAttributes.alt,
      newPopupAttributes.mdDescription,
      newPopupAttributes.tagLi,
      newPopupAttributes.btnHrefFirst,
      newPopupAttributes.btnHrefSecond,
      newPopupAttributes.popupNavPrevious,
      newPopupAttributes.popupNavNext,
    );

    popUpCardContainerNew.innerHTML = projectCard;

    const closeBtn = document.querySelector('.popup-card-close-btn');
    closeBtn.addEventListener('click', function closeBtnForPopup() {
      popUpCardContainerNew.classList.add('d-none');
      popUpCardContainerNew.classList.remove('d-flex');
    });
  }

  const popupNavNext = document.querySelector('.popup-nav-next');
  const popupNavPrevious = document.querySelector('.popup-nav-previous');

  let popupIndexClick = projectCardAttributes.findIndex((attr) => attr.id === id);
  const updateAndMove = (direction) => {
    if (direction === 'next') {
      popupIndexClick =
        popupIndexClick < projectCardAttributes.length - 1 ? popupIndexClick + 1 : popupIndexClick;
    } else if (direction === 'previous') {
      popupIndexClick = popupIndexClick > 0 ? popupIndexClick - 1 : popupIndexClick;
    }

    updatePopupContent(projectCardAttributes[popupIndexClick].id);
  };

  if (popupIndexClick === 0) {
    popupNavPrevious.setAttribute('disabled', 'true');
  }

  if (popupIndexClick === projectCardAttributes.length - 1) {
    popupNavNext.setAttribute('disabled', 'true');
  }

  popupNavNext.addEventListener('click', () => updateAndMove('next'));
  popupNavPrevious.addEventListener('click', () => updateAndMove('previous'));
};

const handlePopupButtonClick = (event) => {
  const button = event.target;
  const popupType = button.value;

  if (popupType === 'see-popup') {
    updatePopupContent(button.id);
    popUpCardContainerNew.classList.remove('d-none');
    popUpCardContainerNew.classList.add('d-flex');
  }
};

document.querySelector('.md-multipost-card-flex').addEventListener('click', handlePopupButtonClick);

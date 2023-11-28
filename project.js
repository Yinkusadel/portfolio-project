const projectCardAttributes = [
  {
    src: 'images/tonic.png',
    title: 'Image 0',
    alt: 'Image 0 Alt Text',
    description: 'Tonic image',
    class: 'tonic-popup',
    id: 'seeProjectTonicBtn',
    tagLi: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    value: 'tonic-popup',
  },
  {
    src: 'images/tonic2.png',
    title: 'Image 1',
    alt: 'Image 1 Alt Text',
    description: 'Tonic project',
    class: 'tonic-two-popup',
    id: 'seeProjectTonicTwoBtn',
    tagLi: ['C++', 'Ruby', 'Python', 'Jquery'],
    value: 'tonic-two-popup',
  },
  {
    src: 'images/multipost.png',
    title: 'Image 2',
    alt: 'Image 2 Alt Text',
    description: 'Availability project',
    class: 'multipost-popup',
    id: 'multiPostPopup',
    tagLi: ['Ember', 'Spring', 'Django', 'Vue'],
    value: 'multipost-popup',
  },
  {
    src: 'images/multipost2.png',
    title: 'Image 3',
    alt: 'Image 3 Alt Text',
    description: 'Professional Art Printing',
    class: 'multipost-two-popup',
    id: 'multiPostTwoPopup',
    tagLi: ['Laravel', 'Angular', 'React', 'Express'],
    value: 'nature-popup',
  },
  {
    src: 'images/facebook.png',
    title: 'Image 4',
    alt: 'Image 4 Alt Text',
    description: 'Facebook 360',
    class: 'facebook-popup',
    id: 'faceBookPopup',
    tagLi: ['Symfony4', 'Codeigniter', 'Backbone', 'Flask'],
    value: 'multipost-two-popup',
  },
  {
    src: 'images/nature.png',
    title: 'Image 5',
    alt: 'Image 5 Alt Text',
    description: 'Nature',
    class: 'nature-popup',
    id: 'naturePopup',
    tagLi: ['Svelte', 'Css', 'Software framework', 'Asp.net'],
    value: 'nature-popup',
  },
];

const cardUl = document.querySelector('.md-multipost-card-flex');

const generateProjectCard = (
  imgSrc,
  imgTitle,
  imgAlt,
  imgDescription,
  popupClass,
  popupID,
  tags,
  btnValue,
) => `
    <li class="cards">
    <figure>
      <img
        class="card-images"
        src="${imgSrc}"
        title="${imgTitle}"
        alt="${imgAlt}"
      />
      <figcaption class="card-text">${imgDescription}</figcaption>
    </figure>
    
     <ul class="card-projects d-flex justify-center">
     ${tags.map((tag) => `<li>${tag}</li>`).join('')}
     </ul>
    
    <div class="card-button d-flex justify-center">
      <button class="see-projects ${popupClass}" id="${popupID}" value="${btnValue}">See Projects</button>
    </div>
    </li>`;

const generateProjectCardsAttr = () => {
  projectCardAttributes.forEach((attributes) => {
    const projectCard = generateProjectCard(
      attributes.src,
      attributes.title,
      attributes.alt,
      attributes.description,
      attributes.class,
      attributes.id,
      attributes.tagLi,
      attributes.value,
    );
    cardUl.innerHTML += projectCard;
  });
};

generateProjectCardsAttr();

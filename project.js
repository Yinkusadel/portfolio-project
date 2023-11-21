const imageAttributesArray = [
  {
    src: 'images/tonic.png',
    title: 'Image 0',
    alt: 'Image 0 Alt Text',
    description: 'Tonic image',
    class: 'tonic-popup',
    tagLi: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
  },
  {
    src: 'images/tonic2.png',
    title: 'Image 1',
    alt: 'Image 1 Alt Text',
    description: 'Tonic project',
    class: 'tonic-two-popup',
    tagLi: ['C++', 'Ruby', 'Python', 'Jquery'],
  },
  {
    src: 'images/multipost.png',
    title: 'Image 2',
    alt: 'Image 2 Alt Text',
    description: 'Availability project',
    class: 'multipost-popup',
    tagLi: ['Ember', 'Spring', 'Django', 'Vue'],
  },
  {
    src: 'images/multipost2.png',
    title: 'Image 3',
    alt: 'Image 3 Alt Text',
    description: 'Professional Art Printing',
    class: 'multipost-two-popup',
    tagLi: ['Laravel', 'Angular', 'React', 'Express'],
  },
  {
    src: 'images/facebook.png',
    title: 'Image 4',
    alt: 'Image 4 Alt Text',
    description: 'Facebook 360',
    class: 'facebook-popup',
    tagLi: ['Symfony4', 'Codeigniter', 'Backbone', 'Flask'],
  },
  {
    src: 'images/nature.png',
    title: 'Image 5',
    alt: 'Image 5 Alt Text',
    description: 'Nature',
    class: 'nature-popup',
    tagLi: ['Svelte', 'Css', 'Software framework', 'Asp.net'],
  },
];

const cardUl = document.querySelector('.md-multipost-card-flex');

const generateProjectCard = (imgSrc, imgTitle, imgAlt, imgDescription, popupClass, tags) => `
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
    
     <ul class="card-projects d-flex">
     ${tags.map((tag) => `<li>${tag}</li>`).join('')}
     </ul>
    
    <div class="card-button">
      <button class="see-projects ${popupClass}">See Projects</button>
    </div>
    </li>`;

const generateProjectCardsAttr = () => {
  imageAttributesArray.forEach((attributes) => {
    const projectCard = generateProjectCard(
      attributes.src,
      attributes.title,
      attributes.alt,
      attributes.description,
      attributes.class,
      attributes.tagLi,
    );
    cardUl.innerHTML += projectCard;
  });
};

generateProjectCardsAttr();

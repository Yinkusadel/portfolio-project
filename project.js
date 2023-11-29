import projectCardAttributes from './attributes.js';

const cardUl = document.querySelector('.md-multipost-card-flex');

const generateProjectCard = (
  imgSrc,
  imgTitle,
  imgAlt,
  imgDescription,
  popupClass,
  popupID,
  tags,
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
      <button class="see-projects ${popupClass}" id="${popupID}" value="see-popup">See Projects</button>
    </div>
    </li>`;

const generateProjectCardsAttr = () => {
  projectCardAttributes.forEach((attributes) => {
    const projectCard = generateProjectCard(
      attributes.src,
      attributes.title,
      attributes.alt,
      attributes.smDescription,
      attributes.class,
      attributes.id,
      attributes.tagLi,
    );
    cardUl.innerHTML += projectCard;
  });
};

generateProjectCardsAttr();

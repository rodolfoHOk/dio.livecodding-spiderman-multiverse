function handleMouseEnter() {
  this.classList.add("s-card--hovered");
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
  document.body.id = "";
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName("s-card");

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector(".s-card-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem.replace("button", "")) - 1);
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  );
  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector(
    ".s-controller__button--active"
  );
  activeButtonElement.classList.remove("s-controller__button--active");
  selectedButtonElement.classList.add("s-controller__button--active");
}

function nextCarouselItem() {
  const currentSelected = document.querySelector(
    ".s-controller__button--active"
  );

  let next = Number(currentSelected.id.replace("button", "")) + 1;
  if (next > 3) {
    next = 1;
  }

  const nextSelection = document.querySelector(`#button${next}`);
  selectCarouselItem(nextSelection);
}

function previousCarouselItem() {
  const currentSelected = document.querySelector(
    ".s-controller__button--active"
  );

  let previous = Number(currentSelected.id.replace("button", "")) - 1;
  if (previous < 1) {
    previous = 3;
  }

  const nextSelection = document.querySelector(`#button${previous}`);
  selectCarouselItem(nextSelection);
}

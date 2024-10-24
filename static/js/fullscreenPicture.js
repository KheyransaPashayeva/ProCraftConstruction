const images = document.querySelectorAll('.clickable');
const modal = document.getElementById('carouselModal');
const modalImg = document.getElementById('carouselImg');
const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicatorsContainer = document.getElementById('carouselIndicators');

let currentIndex = 0;

function openCarousel(index) {
  modal.style.visibility = "visible";
  modal.classList.add('show');
  modalImg.src = images[index].src;
  currentIndex = index;
  updateIndicators(currentIndex);
}

function createIndicators() {
  images.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => openCarousel(index));
    indicatorsContainer.appendChild(indicator);
  });
}

function updateIndicators(index) {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
  updateIndicators(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  updateIndicators(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openCarousel(index));
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.visibility = "hidden";
  }, 500);
});

next.addEventListener('click', showNext);
prev.addEventListener('click', showPrev);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.visibility = "hidden";
    }, 500);
  }
});

createIndicators();
function isPartiallyInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    if (isPartiallyInViewport(element)) {
      if (element.classList.contains('moreRightSide')) {
        element.classList.add('moveLeftAnimation');
      } else if (element.classList.contains('cardHolder')) {
        element.classList.add('moveUpAnimation');
      }
    }
  });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
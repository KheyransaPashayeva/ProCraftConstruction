let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.singleReview');
const totalReviews = reviews.length;

function updateReviewPosition() {
  const reviewWidth = 100;
  const translateValue = -currentReviewIndex * reviewWidth;

  reviews.forEach((review) => {
    review.style.transform = `translateX(${translateValue}%)`;
  });
}

document.querySelector('.directionButton.left').addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex > 0) ? currentReviewIndex - 1 : totalReviews - 1;

  reviews.forEach((review) => {
    review.classList.remove("reviewAnimationFadeOut");
    review.classList.remove("reviewAnimationFadeIn");
  });
  reviews[(currentReviewIndex < totalReviews - 1) ? currentReviewIndex + 1 : 0].classList.add("reviewAnimationFadeOut");
  reviews[currentReviewIndex].classList.add("reviewAnimationFadeIn");

  updateReviewPosition();
});

document.querySelector('.directionButton.right').addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex < totalReviews - 1) ? currentReviewIndex + 1 : 0;

  reviews.forEach((review) => {
    review.classList.remove("reviewAnimationFadeOut");
    review.classList.remove("reviewAnimationFadeIn");
  });
  reviews[(currentReviewIndex > 0) ? currentReviewIndex - 1 : totalReviews - 1].classList.add("reviewAnimationFadeOut");
  reviews[currentReviewIndex].classList.add("reviewAnimationFadeIn");

  updateReviewPosition();
});
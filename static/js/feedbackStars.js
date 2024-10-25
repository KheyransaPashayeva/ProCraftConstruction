const feedbackElements = document.querySelectorAll('.customerFeedback');

feedbackElements.forEach(feedbackElement => {
  const feedbackScore = parseInt(feedbackElement.getAttribute('data-feedback-score'));

  feedbackElement.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('img');
    if (i <= feedbackScore) {
      star.src = './../../assets/svg/star_full.svg';
    } else {
      star.src = './../../assets/svg/star_fade.svg';
    }
    star.alt = '*';
    feedbackElement.appendChild(star);
  }
});
const correctAnswers = ['B', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswer.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0,0);
  result.classList.remove('d-none');
  result.querySelector('span').textContent = `${score}%`;
  
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(score === output) {
      clearInterval(timer);
    } else {
      output++
    }
  }, 10);

});



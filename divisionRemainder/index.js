// import { evenOrOdd } from './evenOrOdd';

const input = document.querySelector('#inputNum');
const answer = document.querySelector('#answer');

input.addEventListener('keyup', (e) => {
  let value = e.currentTarget.value;

  answer.innerHTML = evenOrOdd(value);
});

function evenOrOdd(num) {
  const parseNum = Number.parseInt(num);

  if (parseNum % 2 === 0) {
    return 'even';
  }
  return 'odd';
}

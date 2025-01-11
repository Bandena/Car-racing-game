const car = document.querySelector('.car');
const scoreElement = document.querySelector('.score');
let carPosition = 50;

document.addEventListener('keydown', () => {
  carPosition -= 40;
  car.style.bottom = `${carPosition}px`;
});

function restartGame() {
  carPosition = 50;
  car.style.bottom = `${carPosition}px`;
}

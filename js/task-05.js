const RandomColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  RandomColor.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
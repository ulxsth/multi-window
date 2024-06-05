const kittenImg = document.getElementById('kitten');
const positionX = 500;
const positionY = 500;

setInterval(() => {
  let x = screenX * -1 + positionX;
  let y = screenY * -1 + positionY;
  console.log(x, y);
  kittenImg.style.left = `${x}px`;
  kittenImg.style.top = `${y}px`;
}, 100);

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
console.log(generateRandomColor());
function btn() {
  let a = generateRandomColor();
  document.getElementById("colorpad").style.backgroundColor = a;

  document.getElementById("btn").style.backgroundColor = a;
}

// generate random colors using hex number- used for color codes

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    //for six characters(#xxxxxx this type of code is used in css)
    color += hex[Math.floor(Math.random() * 16)]; //picks values from given hex values(0-9A-F), to fill up index of hex[], of 6 characters
  }
  return color;
};

const colorChange = function () {
  document.body.style.backgroundColor = randomColor();
};

let change;

document.querySelector('#start').addEventListener('click', function () {
  if (!change) {
    change = setInterval(colorChange, 1000);
  }
}); //if part used to enhance code, uske bina bhi chalega

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(change);
  change = null; //enhances code
});

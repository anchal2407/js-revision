const insert = document.getElementById('insert');

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

window.addEventListener('keydown', function (e) {
  document.querySelector('.project').style.backgroundColor = randomColor();
  insert.innerHTML = `
  <div class='keys'>
  <table style="width:100%">
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
  </table>
  </div>
  `;
});
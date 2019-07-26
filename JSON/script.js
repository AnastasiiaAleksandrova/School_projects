function changeColors() {
  fetch("colors.json")
    .then(response => {
      //console.log(response)
      return response.json();
    })
    .then(colors => {
      //console.log(colors);
      let r = Math.floor(Math.random() * colors.length);
      document.getElementById("main").style.backgroundColor = colors[r].hex;
      document.getElementById("color").innerHTML = `Background color is ${colors[r].name}`
    })
}

function changeColorsAllTime() {
  setInterval(changeColors, 1000);
}
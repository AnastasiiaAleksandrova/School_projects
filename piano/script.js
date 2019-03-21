let keys = document.getElementsByClassName("key");
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("mousedown", function() {
    if (isSwichedOn) {
      document.getElementById("display").innerHTML = "You pressed " + keys[i].classList[0] + " note";
      let soundId = "note" + keys[i].classList[0];
      document.getElementById(soundId).play();
      document.getElementById(soundId).currentTime = 0;
    }
  })
}


let isSwichedOn = false;
document.getElementById("display").style.backgroundColor = "grey";


function onButtonClick() {
  if (!isSwichedOn) {
    isSwichedOn = true;
    document.getElementById("display").style.backgroundColor = "rgb(77, 176, 31)";
    document.getElementById("display").innerHTML = "Welcome!";
    document.getElementById("button").style.color = "rgb(77, 176, 31)";

  } else {
    isSwichedOn = false;
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").style.backgroundColor = "grey";
    document.getElementById("button").style.color = "black";
  }
}
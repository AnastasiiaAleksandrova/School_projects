document.addEventListener('DOMContentLoaded', function() {
  let keys = document.getElementsByClassName("key");
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("mousedown", function() {
      let soundId = "note" + keys[i].classList[0];;
      document.getElementById(soundId).play();
    })
  }
});
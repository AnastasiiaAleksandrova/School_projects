window.onscroll = function() {
  scrollFunction()
};


function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}


function backtotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function topnavFunction() {
  var x = document.getElementById("mobTopNav");
  if (x.className == "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

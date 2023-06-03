document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var logoWidth = logo.offsetWidth;
    var logoHeight = logo.offsetHeight;
    
    var targetLeft = (windowWidth - logoWidth) / 2;
    var targetTop = (windowHeight - logoHeight) / 2;
    
    logo.style.left = targetLeft + "px";
    logo.style.top = targetTop + "px";
  });
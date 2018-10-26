"use strict";

var advanceImage = (function() {
   var counter = -1;

   var images = [
      {url: "assets/img/dorky.jpg", text: "Sometimes he can look very dorky."},
      {url: "assets/img/sneeze.jpg", text: "Sometimes he inhales grass and dirt."},
      {url: "assets/img/mysterious.jpg", text: "Sometimes he can look very mysterious."}
   ];

   return function() {
      counter++;

      if (counter === 3) {
         counter = 0;
      }
   
      document.getElementById("image").src = images[counter].url;
      document.getElementById("text").textContent = images[counter].text;
   }
})();
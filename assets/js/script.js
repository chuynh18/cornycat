"use strict";

// Immediately-invoked function expression (called via an onclick attribute in the img element) in the HTML
var advanceImage = (function() {
   // keep track of what picture and text to show
   var counter = -1;

   // pictures and text to show
   var images = [
      {url: "assets/img/dorky.jpg", text: "Sometimes he can look very dorky."},
      {url: "assets/img/sneeze.jpg", text: "Sometimes he inhales grass and dirt."},
      {url: "assets/img/mysterious.jpg", text: "Sometimes he can look very mysterious."}
   ];

   // audio files
   var audio = [
      new Audio("assets/snd/meow1.webm"),
      new Audio("assets/snd/meow2.webm")
   ];

   return function() {
      counter++; // increment counter

      // reset counter to 0 when it reaches 3
      if (counter === 3) {
         counter = 0;
      }
   
      // set the image and text
      document.getElementById("image").src = images[counter].url;
      document.getElementById("text").textContent = images[counter].text;

      // play one of the two audio files randomly
      audio[Math.floor(Math.random() * 2)].play();
   }
})();
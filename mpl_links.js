"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Trent Peterson
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

//this loads it when you start the window
window.addEventListener("load", function () {
    //this creates a like array of all of the select elements in the form
    var allSelect = document.querySelectorAll("form#govLinks select");
    //this loops through the like array created above and makes it so when you change the option in the select list it changes the site you are on 
    for (var i = 0; i < allSelect.length; i++) {
        document.onchange = function (e) {
            document.location.href = e.target.value;
        };
    }
})
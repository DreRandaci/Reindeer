// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:
// 	Blue Dasher
// 	Red Dancer


console.log("This is the beginning of my js file")

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
var html = "";

debugger;
for(var i = 0; i < reindeer.length; i++) {
    html += '<p>' + colors[i] + ' ' + reindeer[i] + '</p>';
};

hohohoElement.innerHTML = html;

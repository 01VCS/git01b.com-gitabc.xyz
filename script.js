// PREPARE FOR HTTB MOD-REWRITTING ---->
//var count = (location.pathname.split('/').length - 1) - (location.pathname[location.pathname.length - 1] == '/' ? 1 : 0);
// thanks to https://stackoverflow.com/a/28485576/5623661
//console.log(count);
//-
//var pathArray = window.location.pathname.split('/');
//var ProfileLevel = pathArray[1];
//var RepoLevel = pathArray[2];
// thanks to https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
//console.log(ProfileLevel);
//console.log(RepoLevel);
// <---- PREPARE FOR HTTB MOD-REWRITTING

//console.log(window.location.hash);
// thanks to https://stackoverflow.com/a/6944772/5623661 (https://github.com/nicolekc), https://usefulangle.com/post/298/javascript-url-hash

const SUPPORTEDSITES = { hub: "github.com", lab: "gitlab.com" };
// thanks to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

//console.log(SUPPORTEDSITES.hub);
//console.log(SUPPORTEDSITES.lab);

var count = (window.location.hash.split('/').length - 1) - (window.location.hash[window.location.hash.length - 1] == '/' ? 1 : 0);
// thanks to https://stackoverflow.com/a/28485576/5623661
console.log(count);

var pathArray = window.location.hash.split('/');
var ProfileLevel = pathArray[1];
var RepoLevel = pathArray[2];
// thanks to https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
console.log(ProfileLevel);
console.log(RepoLevel);

if(count == '2'){
        console.log("Repo")
}
if(count == '1'){
        console.log("Profile")
}

// start of "window.onload"
window.onload = function(){
//var repoheadingabt = document.getElementById('abtrepoheading');
//var text = document.createTextNode("<a href='https://github.com/" +ProfileLevel +"'" +"/" +RepoLevel);
//repoheadingabt.appendChild(text);
//document.querySelector("#abtrepoheading").innerHTML = "<a href='https://github.com/" +ProfileLevel +"'" +"/" +RepoLevel;
//document.querySelector("#abtrepoheading").innerHTML = "<a href='https://github.com/";

//function addElement() {
//  // create a new div element
//  const newDiv = document.createElement("div");
  
//  const repoheadingabt = document.getElementById('abtrepoheading');

//  // and give it some content
//  const newContent = document.createTextNode("Hi there and greetings!");

//  // add the text node to the newly created div
//  repoheadingabt.appendChild(newContent);

//  // add the newly created element and its content into the DOM
//  const currentDiv = document.getElementById("div1");
//  document.body.insertBefore(newDiv, currentDiv);
//}
//addElement()
// from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
} // end of "window.onload"

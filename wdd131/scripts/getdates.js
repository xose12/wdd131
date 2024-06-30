const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;


//Last modified
document.getElementById("lastModified").innerHTML = new Date(document.lastModified)

lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified)}`;
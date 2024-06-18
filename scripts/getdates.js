// Get the current year and display it in the element with the id 'currentyear'
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.innerHTML = currentYear

// Get the last modified date of the document and display it in the element with the id 'lastModified'
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.innerHTML = 'Last modified: ' + document.lastModified;

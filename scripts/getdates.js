document.addEventListener("DOMContentLoaded", function() {
    // Get the current year and display it in the element with the id 'currentyear'
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.innerHTML = currentYear;
    }

    // Get the last modified date of the document and display it in the element with the id 'lastModified'
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.innerHTML = 'Last modified: ' + document.lastModified;
    }
});

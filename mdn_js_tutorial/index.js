// Function: creates a new paragraph and appends it to the bottom of the html body

function createParagraph() {
    const para = document.createElement('p');
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

/*
1. Get references to all the buttons on the page in an array format.
2. Loop through all the buttons and add a click event listener to ech one.
When any button is clicked, the createParagraph() function is run.
*/

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener("click", createParagraph)
}
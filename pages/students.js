// // students.js

// // Export the content function
// export default function studentsContent() {
//     return `
//         <div class="container">
//             <h1>Welcome to the School Management System</h1>
//             <p class="lead">This is the home page content. Modify it as needed for your application.</p>
//         </div>
//     `;
//   }



document.addEventListener('DOMContentLoaded', function() {
    // Create the main container
    var mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    document.body.appendChild(mainContainer);

    // Create the card container
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    mainContainer.appendChild(cardContainer);

    // Create the card
    var card = document.createElement('div');
    card.className = 'card';
    cardContainer.appendChild(card);

    // Create the card body
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    // Create the card title
    var cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Name';
    cardBody.appendChild(cardTitle);

    // Create the card text
    var cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = 'John Doe';
    cardBody.appendChild(cardText);

    // Add the background image
    document.body.style.backgroundImage = 'url("https://example.com/student-dashboard-photo.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Add some extra CSS styles to improve the look and feel of the dashboard
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Arial, sans-serif';
});
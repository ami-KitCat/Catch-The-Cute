let score = 0;
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");
const cardMessage = document.getElementById("cardMessage");
const customMessage = document.getElementById("customMessage");
const customImage = document.getElementById("customImage");
const nextButton = document.getElementById("nextButton");
const gameArea = document.getElementById("gameArea");
const cuteImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '9.png', '12.png', '13.png', '15.png', '16.png','19.png', '21.png','jewel.png', '24.png', '50.png', '51.png', '52.png']; // Update this array with your image paths

const surprises = [
    { text: "Sometimes you look so pretty", image: "pretty.png" }, // Replace with your images
    { text: "And sometimes you look so cool!", image: "cool.png" },
    { text: "Sometimes you are angry", image: "angry.png" },
    { text: "Other times, you’re just a jewel.", image: "jewel.png" },
    { text: "No matter what happens, Know that I'll be there for you,", image: "6.png" },
    { text: "Wishing you the happiest birthday!!", image: "hbd.png" },
    { text: "With all my love, I love you ;)", image: "17.png" }  // Final birthday message image
];

let currentSurpriseIndex = 0;
let gameInterval; // Variable to store the interval

// Function to create random falling images in the game area
function createImage() {
    const img = document.createElement("img");
    img.src = cuteImages[Math.floor(Math.random() * cuteImages.length)];
    img.style.position = "absolute";
    img.style.top = "-100px"; // Start above the game area
    img.style.left = Math.random() * (gameArea.clientWidth - 100) + "px"; // Random horizontal position
    img.style.cursor = "pointer";
    img.style.transition = "top 2.8s"; // Transition for falling effect

    // Append the image to the game area
    gameArea.appendChild(img);

    // Trigger the falling effect after the image is added
    setTimeout(() => {
        img.style.top = gameArea.clientHeight + "px"; // Move the image to the bottom of the game area
    }, 10); // Small delay to ensure the transition is applied

    img.addEventListener("click", function() {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        gameArea.removeChild(img);
        if (score >= 20 && score < 27) { // Trigger end game at 20
            endGame();
        } else if (score >= 27) { // Stop the game after the last surprise
            stopGame();
        }
    });

    // Remove the image after it falls out of the game area
    setTimeout(() => {
        if (gameArea.contains(img)) {
            gameArea.removeChild(img);
        }
    }, 2800); // Match this with the transition duration
}

// Function to start the game
function startGame() {
    gameInterval = setInterval(createImage, 1000); // Create a new image every second
}

// Function to end the game and show surprise
function endGame() {
    clearInterval(gameInterval); // Stop creating images
    message.style.display = 'none';
    cardMessage.style.display = 'block'; // Show the surprise card
    showSurprise(currentSurpriseIndex); // Show the first surprise
}

// Function to show the current surprise message and image
function showSurprise(index) {
    if (index < surprises.length) {
        customMessage.innerText = surprises[index].text; // Set text for the surprise
        customImage.src = surprises[index].image; // Set image for the surprise
        currentSurpriseIndex++; // Move to the next surprise for the next click

        // Hide the next button if it's the last surprise
        if (currentSurpriseIndex === surprises.length) {
            nextButton.style.display = "none"; // Hide the button
        } else {
            nextButton.innerText = "Reveal Next"; // Change button text to "Reveal Next"
        }
    }
}

// Function to handle the next button click
nextButton.addEventListener("click", () => {
    if (currentSurpriseIndex < surprises.length) {
        showSurprise(currentSurpriseIndex);
    }
});

// Function to stop the game after the last surprise
function stopGame() {
    clearInterval(gameInterval); // Stop creating images
    message.style.display = 'none';
    cardMessage.style.display = 'block'; // Show final message
    customMessage.innerText = "Game Over! Your final score is: " + score; // Show final score message
    customImage.src = "gameOverImage.png"; // Set this to an appropriate game over image
}

// Start the game on page load
window.onload = startGame;































// let score = 0;
// const scoreDisplay = document.getElementById("score");
// const message = document.getElementById("message");
// const cardMessage = document.getElementById("cardMessage");
// const customMessage = document.getElementById("customMessage");
// const customImage = document.getElementById("customImage");
// const nextButton = document.getElementById("nextButton");
// const gameArea = document.getElementById("gameArea");
// const cuteImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']; // Update this array with your image paths

// const surprises = [
//     { text: "Surprise 1! 🎉", image: "surpriseImage1.png" }, // Replace with your images
//     { text: "Surprise 2! 🌟", image: "surpriseImage2.png" },
//     { text: "Surprise 3! 💖", image: "surpriseImage3.png" },
//     { text: "Surprise 4! 🎈", image: "surpriseImage4.png" },
//     { text: "Happy Birthday! 🎂", image: "yourImage.png" }  // Final birthday message image
// ];

// let currentSurpriseIndex = 0;
// let gameInterval; // Variable to store the interval

// // Function to create random falling images in the game area
// function createImage() {
//     const img = document.createElement("img");
//     img.src = cuteImages[Math.floor(Math.random() * cuteImages.length)];
//     img.style.position = "absolute";
//     img.style.top = "-100px"; // Start above the game area
//     img.style.left = Math.random() * (gameArea.clientWidth - 100) + "px"; // Random horizontal position
//     img.style.cursor = "pointer";
//     img.style.transition = "top 2.8s"; // Transition for falling effect

//     // Append the image to the game area
//     gameArea.appendChild(img);

//     // Trigger the falling effect after the image is added
//     setTimeout(() => {
//         img.style.top = gameArea.clientHeight + "px"; // Move the image to the bottom of the game area
//     }, 10); // Small delay to ensure the transition is applied

//     img.addEventListener("click", function() {
//         score++;
//         scoreDisplay.textContent = "Score: " + score;
//         gameArea.removeChild(img);
//         if (score >= 20 && score < 25) { // Trigger end game at 20
//             endGame();
//         } else if (score >= 25) { // Stop the game after the last surprise
//             stopGame();
//         }
//     });

//     // Remove the image after it falls out of the game area
//     setTimeout(() => {
//         if (gameArea.contains(img)) {
//             gameArea.removeChild(img);
//         }
//     }, 2800); // Match this with the transition duration
// }

// // Function to start the game
// function startGame() {
//     gameInterval = setInterval(createImage, 1000); // Create a new image every second
// }

// // Function to end the game and show surprise
// function endGame() {
//     clearInterval(gameInterval); // Stop creating images
//     message.style.display = 'none';
//     cardMessage.style.display = 'block'; // Show the surprise card
//     showSurprise(currentSurpriseIndex); // Show the first surprise
// }

// // Function to show the current surprise message and image
// function showSurprise(index) {
//     if (index < surprises.length) {
//         customMessage.innerText = surprises[index].text; // Set text for the surprise
//         customImage.src = surprises[index].image; // Set image for the surprise
//         currentSurpriseIndex++; // Move to the next surprise for the next click

//         // Hide the next button if it's the last surprise
//         if (currentSurpriseIndex === surprises.length) {
//             nextButton.style.display = "none"; // Hide the button
//         } else {
//             nextButton.innerText = "Reveal Next"; // Change button text to "Reveal Next"
//         }
//     }
// }

// // Function to handle the next button click
// nextButton.addEventListener("click", () => {
//     if (currentSurpriseIndex < surprises.length) {
//         showSurprise(currentSurpriseIndex);
//     }
// });

// // Function to stop the game after the last surprise
// function stopGame() {
//     clearInterval(gameInterval); // Stop creating images
//     message.style.display = 'none';
//     cardMessage.style.display = 'block'; // Show final message
//     customMessage.innerText = "Game Over! Your final score is: " + score; // Show final score message
//     customImage.src = "gameOverImage.png"; // Set this to an appropriate game over image
// }

// // Start the game on page load
// window.onload = startGame;












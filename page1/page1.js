// Define the word to be guessed
const word = "MUSHROOM".toUpperCase();

// Get references to HTML elements
const wordDisplay = document.querySelector("#word");
const letterButtons = document.querySelectorAll("#letters button");

// Create an array to track the guessed letters
const guessedLetters = [];

// Display the word with underscores for unguessed letters
wordDisplay.textContent = word.split("").map(letter => {
  if (letter === " ") {
    return " ";
  } else {
    return guessedLetters.includes(letter) ? letter : "_";
  }
}).join("");

// Add event listeners to each letter button
letterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const letter = button.textContent.toUpperCase();

    // Check if the letter has already been guessed
    if (guessedLetters.includes(letter)) {
      alert("You've already guessed that letter! ");
      return;
    }

    // Add the letter to the guessed letters array
    guessedLetters.push(letter);

    // Update the word display with the guessed letters
    wordDisplay.textContent = word.split("").map(letter => {
      if (letter === " ") {
        return " ";
      } else {
        return guessedLetters.includes(letter) ? letter : "_";
      }
    }).join("");

    // Check if the game has been won
    if (!wordDisplay.textContent.includes("_")) {
      alert("Your Missing Character name is a MALE! Clue1: Your Missing Character is a MALE! ");
    }
  });
});

// Add event listener for keyboard input
document.addEventListener("keydown", event => {
  const letter = event.key.toUpperCase();

  // Check if the letter has already been guessed
  if (guessedLetters.includes(letter)) {
    alert("You've already guessed that letter!  ");
    return;
  }

  // Add the letter to the guessed letters array
  guessedLetters.push(letter);

  // Update the word display with the guessed letters
  wordDisplay.textContent = word.split("").map(letter => {
    if (letter === " ") {
      return " ";
    } else {
      return guessedLetters.includes(letter) ? letter : "_";
    }
  }).join("");

  // Check if the game has been won
  if (!wordDisplay.textContent.includes("_")) {
    alert("Clue1: Your Missing Character is a MALE!");
  }
});

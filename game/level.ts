type WordsArray = string[];
let chances: number = 0;
let currentWord: string = "";
let maskedWord: string = "";

// Fetches the words from the JSON file
async function wordsData(): Promise<WordsArray> {
    try {
        const response = await fetch("./words.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: WordsArray = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching words data:", error);
        return [];
    }
}

// Selects a random word from the fetched word list
function getRandomWord(words: WordsArray): string {
    if (words.length === 0) return "No words available";
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]; 
}

// Replaces random letters in the word with blanks
function maskWord(word: string): { maskedWord: string, blanksCount: number } {
    const letters = word.split('');
    let blanksCount = 0;
    const numBlanks = Math.floor(Math.random() * (letters.length / 2)) + 1; // Randomly blank out 1 to half of the letters

    for (let i = 0; i < numBlanks; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if (letters[randomIndex] !== '_') {
            letters[randomIndex] = '_';
            blanksCount++;
        }
    }
    return { maskedWord: letters.join(' '), blanksCount };
}

// Displays an on-screen keyboard with clickable lowercase letters
function displayKeyboard(): void {
    const keyboard = document.getElementById('keyboard');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // lowercase alphabet
    if (keyboard) {
        alphabet.split('').forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter; // Lowercase letters
            button.addEventListener('click', () => {
                // Handle letter click
                handleLetterClick(letter);
            });
            keyboard.appendChild(button);
        });
    }
}

// Displays the current masked word
function displayMaskedWord(): void {
    const container = document.getElementById('container');
    if (container) {
        container.textContent = maskedWord;
    } else {
        console.error("Container div not found.");
    }
}

// Handles letter click and updates the game state
function handleLetterClick(letter: string): void {
    let isCorrect = false;

    // Replace the blanks with the correct letter
    const wordArray = currentWord.split('');
    const maskedArray = maskedWord.split(' ');

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].toLowerCase() === letter) { // Compare against lowercase letters
            maskedArray[i] = letter;
            isCorrect = true;
        }
    }

    maskedWord = maskedArray.join(' ');
    displayMaskedWord();

    if (!isCorrect) {
        decreaseChances();
    } else if (maskedWord.indexOf('_') === -1) {
        // Store the result in localStorage and redirect to result.html
        localStorage.setItem('gameResult', 'won');
        localStorage.setItem('word', currentWord);
        window.location.href = 'result.html';
    }
}

// Decreases the chances left and checks for a loss
function decreaseChances(): void {
    if (chances > 0) {
        chances--;
        const chancesElement = document.getElementById('chancesLeft');
        if (chancesElement) {
            chancesElement.textContent = chances.toString();
        }

        if (chances === 0) {
            // Store the result in localStorage and redirect to result.html
            localStorage.setItem('gameResult', 'lost');
            localStorage.setItem('word', currentWord);
            window.location.href = 'result.html';
        }
    } else {
        alert(`You lose! The correct word was "${currentWord}".`);
    }
}

// Sets up the game when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Display the level chosen by the player
    const levelName = localStorage.getItem("level");
    console.log("Level Name:", levelName); // Log the level name for debugging

    if (levelName) {
        const levelHeading = document.getElementById('levelName');
        if (levelHeading) {
            levelHeading.textContent = `Welcome to the ${levelName} level!`;
        }
    } else {
        console.error("No level found in localStorage.");
    }

    // Fetch and display a random masked word
    wordsData().then(words => {
        if (words.length > 0) {
            currentWord = getRandomWord(words);
            const { maskedWord: initialMaskedWord, blanksCount } = maskWord(currentWord);
            maskedWord = initialMaskedWord;
            console.log("Masked word:", maskedWord);
            console.log("Blanks Count:", blanksCount); // Log the number of blanks for debugging

            displayMaskedWord();

            // Set initial chances based on the number of blanks and the level
            switch (levelName) {
                case 'Beginner':
                    chances = 3 * blanksCount;
                    break;
                case 'Medium':
                    chances = 2 * blanksCount;
                    break;
                case 'Expert':
                    chances = blanksCount;
                    break;
                default:
                    chances = 0; // Default case if no level or unknown level
                    console.error("Unknown level:", levelName);
            }
            console.log("Initial Chances:", chances); // Log the initial chances for debugging

            const chancesElement = document.getElementById('chancesLeft');
            if (chancesElement) {
                chancesElement.textContent = chances.toString();
            }

            displayKeyboard();
        } else {
            console.log("No words available.");
        }
    });
});

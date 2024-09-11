var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var chances = 0;
var currentWord = "";
var maskedWord = "";
// Fetches the words from the JSON file
function wordsData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("./words.json")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! Status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching words data:", error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Selects a random word from the fetched word list
function getRandomWord(words) {
    if (words.length === 0)
        return "No words available";
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
// Replaces random letters in the word with blanks
function maskWord(word) {
    var letters = word.split('');
    var blanksCount = 0;
    var numBlanks = Math.floor(Math.random() * (letters.length / 2)) + 1; // Randomly blank out 1 to half of the letters
    for (var i = 0; i < numBlanks; i++) {
        var randomIndex = Math.floor(Math.random() * letters.length);
        if (letters[randomIndex] !== '_') {
            letters[randomIndex] = '_';
            blanksCount++;
        }
    }
    return { maskedWord: letters.join(' '), blanksCount: blanksCount };
}
// Displays an on-screen keyboard with clickable lowercase letters
function displayKeyboard() {
    var keyboard = document.getElementById('keyboard');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'; // lowercase alphabet
    if (keyboard) {
        alphabet.split('').forEach(function (letter) {
            var button = document.createElement('button');
            button.textContent = letter; // Lowercase letters
            button.addEventListener('click', function () {
                // Handle letter click
                handleLetterClick(letter);
            });
            keyboard.appendChild(button);
        });
    }
}
// Displays the current masked word
function displayMaskedWord() {
    var container = document.getElementById('container');
    if (container) {
        container.textContent = maskedWord;
    }
    else {
        console.error("Container div not found.");
    }
}
// Handles letter click and updates the game state
function handleLetterClick(letter) {
    var isCorrect = false;
    // Replace the blanks with the correct letter
    var wordArray = currentWord.split('');
    var maskedArray = maskedWord.split(' ');
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].toLowerCase() === letter) { // Compare against lowercase letters
            maskedArray[i] = letter;
            isCorrect = true;
        }
    }
    maskedWord = maskedArray.join(' ');
    displayMaskedWord();
    if (!isCorrect) {
        decreaseChances();
    }
    else if (maskedWord.indexOf('_') === -1) {
        // Store the result in localStorage and redirect to result.html
        localStorage.setItem('gameResult', 'won');
        localStorage.setItem('word', currentWord);
        window.location.href = 'result.html';
    }
}
// Decreases the chances left and checks for a loss
function decreaseChances() {
    if (chances > 0) {
        chances--;
        var chancesElement = document.getElementById('chancesLeft');
        if (chancesElement) {
            chancesElement.textContent = chances.toString();
        }
        if (chances === 0) {
            // Store the result in localStorage and redirect to result.html
            localStorage.setItem('gameResult', 'lost');
            localStorage.setItem('word', currentWord);
            window.location.href = 'result.html';
        }
    }
    else {
        alert("You lose! The correct word was \"".concat(currentWord, "\"."));
    }
}
// Sets up the game when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Display the level chosen by the player
    var levelName = localStorage.getItem("level");
    console.log("Level Name:", levelName); // Log the level name for debugging
    if (levelName) {
        var levelHeading = document.getElementById('levelName');
        if (levelHeading) {
            levelHeading.textContent = "Welcome to the ".concat(levelName, " level!");
        }
    }
    else {
        console.error("No level found in localStorage.");
    }
    // Fetch and display a random masked word
    wordsData().then(function (words) {
        if (words.length > 0) {
            currentWord = getRandomWord(words);
            var _a = maskWord(currentWord), initialMaskedWord = _a.maskedWord, blanksCount = _a.blanksCount;
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
            var chancesElement = document.getElementById('chancesLeft');
            if (chancesElement) {
                chancesElement.textContent = chances.toString();
            }
            displayKeyboard();
        }
        else {
            console.log("No words available.");
        }
    });
});

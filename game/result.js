document.addEventListener("DOMContentLoaded", function () {
    var resultDiv = document.getElementById('result');
    var btn = document.querySelector('button');
    if (!resultDiv) {
        console.error('Result div not found.');
        return;
    }
    // Retrieve game result and word from localStorage
    var gameResult = localStorage.getItem('gameResult');
    var word = localStorage.getItem('word');
    if (gameResult && word) {
        if (gameResult === 'won') {
            resultDiv.textContent = "Congratulations! You won! The word was \"".concat(word, "\".");
        }
        else {
            resultDiv.textContent = "You lost! The correct word was \"".concat(word, "\". Better luck next time!");
        }
    }
    else {
        resultDiv.textContent = "No game result found.";
    }
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
        window.location.href = "home.html";
    });
});

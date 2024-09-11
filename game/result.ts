document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById('result') as HTMLDivElement | null;
    const btn = document.querySelector('button') as HTMLButtonElement | null; 
    if (!resultDiv) {
        console.error('Result div not found.');
        return;
    }

    // Retrieve game result and word from localStorage
    const gameResult: string | null = localStorage.getItem('gameResult');
    const word: string | null = localStorage.getItem('word');

    if (gameResult && word) {
        if (gameResult === 'won') {
            resultDiv.textContent = `Congratulations! You won! The word was "${word}".`;
        } else {
            resultDiv.textContent = `You lost! The correct word was "${word}". Better luck next time!`;
        }
    } else {
        resultDiv.textContent = "No game result found.";
    }
    btn?.addEventListener("click",()=>{
        window.location.href = "home.html";
    })
});
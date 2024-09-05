type WordsArray = string[];

async function wordsData(): Promise<WordsArray> {
    try {
        let response = await fetch("./words.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data: WordsArray = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching words data:", error);
        return [];
    }
}

function getRandomWord(words: WordsArray): string {
    if (words.length === 0) return "No words available";
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    wordsData().then(words => {
        if (words.length > 0) {
            const randomWord = getRandomWord(words);
            console.log("Randomly chosen word:", randomWord);

            const container = document.getElementById('container');
            if (container) {
                container.textContent = randomWord;
            } else {
                console.error("Container div not found.");
            }
        } else {
            console.log("No words available.");
        }
    });
});

// Fortune Generator
const fortunes = [
    "A dream you have will come true.",
    "You will soon receive good news.",
    "Success is in your future.",
    "A new opportunity will arise.",
    "You will make a new friend soon.",
    "Good things come to those who wait.",
    "Your hard work will pay off.",
    "You will find happiness in small things.",
    "A journey of a thousand miles begins with a single step.",
    "You will achieve greatness."
];

const fortuneText = document.getElementById("fortune-text");
const fortuneBox = document.getElementById("fortune-box");

// Randomly select a fortune
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
}

// Change font color
document.getElementById("font-color-btn").addEventListener("click", () => {
    const colors = ["red", "blue", "green", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fortuneText.style.color = randomColor;
});

// Change background color
document.getElementById("bg-color-btn").addEventListener("click", () => {
    const colors = ["lightyellow", "lightblue", "lightgreen", "lavender"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fortuneBox.style.backgroundColor = randomColor;
});

// Change border color
document.getElementById("border-color-btn").addEventListener("click", () => {
    const colors = ["orange", "teal", "pink", "brown"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fortuneBox.style.borderColor = randomColor;
});

// Change font size and family
document.getElementById("font-size-btn").addEventListener("click", () => {
    const fonts = ["Arial", "Courier New", "Georgia", "Verdana"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    fortuneText.style.fontFamily = randomFont;
    fortuneText.style.fontSize = "1.5em";
});

// Load a random fortune on page load
window.onload = getRandomFortune;


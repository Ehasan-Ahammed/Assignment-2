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

// Theme configurations
const themes = {
    blue: {
        backgroundColor: "lightblue",
        textColor: "darkblue",
        borderColor: "navy",
        fontSize: "1.2em",
        fontFamily: "Arial"
    },
    green: {
        backgroundColor: "lightgreen",
        textColor: "darkgreen",
        borderColor: "forestgreen",
        fontSize: "1.4em",
        fontFamily: "Georgia"
    },
    purple: {
        backgroundColor: "lavender",
        textColor: "darkpurple",
        borderColor: "purple",
        fontSize: "1.3em",
        fontFamily: "Verdana"
    },
    orange: {
        backgroundColor: "lightyellow",
        textColor: "darkorange",
        borderColor: "orange",
        fontSize: "1.5em",
        fontFamily: "Courier New"
    }
};

// Apply theme function
function applyTheme(theme) {
    fortuneBox.style.backgroundColor = theme.backgroundColor;
    fortuneText.style.color = theme.textColor;
    fortuneBox.style.borderColor = theme.borderColor;
    fortuneText.style.fontSize = theme.fontSize;
    fortuneText.style.fontFamily = theme.fontFamily;
}

// Add event listeners for theme buttons
document.getElementById("blue-btn").addEventListener("click", () => applyTheme(themes.blue));
document.getElementById("green-btn").addEventListener("click", () => applyTheme(themes.green));
document.getElementById("purple-btn").addEventListener("click", () => applyTheme(themes.purple));
document.getElementById("orange-btn").addEventListener("click", () => applyTheme(themes.orange));

// Load a random fortune on page load
window.onload = getRandomFortune;


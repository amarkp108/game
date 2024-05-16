let button = document.getElementById("btn");
let images = document.querySelectorAll("img");
let h1 = document.querySelector("h1");

button.addEventListener("click", function() {
    let randomNumber1 = getRandomNumber(1, 6); 
    let randomNumber2 = getRandomNumber(1, 6);

    images[0].src = `images/dice${randomNumber1}.png`;
    images[1].src = `images/dice${randomNumber2}.png`;

    if (randomNumber1 > randomNumber2) {
        h1.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        h1.textContent = "Player 2 Wins! 🚩";
    } else {
        h1.textContent = "Draw!";
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

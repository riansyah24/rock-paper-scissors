// Com
const comBatu = document.getElementById("comRock");
const comGunting = document.getElementById("comScissors");
const comKertas = document.getElementById("comPaper");

// Player
const playerBatu = document.getElementById("playerRock");
const playerGunting = document.getElementById("playerScissors");
const playerKertas = document.getElementById("playerPaper");

const comScore = document.getElementById("comScore");
let score = 0;

// Function
function rock() {
  comScore.innerText = score += 1;
  playerBatu.style.display = "block";
  comKertas.style.display = "block";
  playerKertas.style.display = "none";
  comGunting.style.display = "none";
  playerGunting.style.display = "none";
  comBatu.style.display = "none";
}

function paper() {
  comScore.innerText = score += 1;
  playerKertas.style.display = "block";
  comGunting.style.display = "block";
  playerBatu.style.display = "none";
  comKertas.style.display = "none";
  playerGunting.style.display = "none";
  comBatu.style.display = "none";
}

function scissors() {
  comScore.innerText = score += 1;
  playerGunting.style.display = "block";
  comBatu.style.display = "block";
  playerBatu.style.display = "none";
  comKertas.style.display = "none";
  playerKertas.style.display = "none";
  comGunting.style.display = "none";
}

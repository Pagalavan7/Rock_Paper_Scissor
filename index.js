let items = ["Rock", "Paper", "Scissors"];
let selectedButton = document.querySelectorAll(".buttons .flex-item");
let result = document.getElementById("result");
let resultDiv = document.querySelector(".output");
selectedButton.forEach((button) =>
  button.addEventListener("click", (event) => {
    startPlay(event.target);
  })
);

function startPlay(element) {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = items[randomNum];
  let playerChoice = element.innerHTML;
  document.getElementById(computerChoice).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(computerChoice).classList.remove("pressed");
  }, 100);
  console.log(playerChoice);
  console.log(computerChoice);
  switch (playerChoice) {
    case computerChoice:
      result.innerHTML = "Its a tie";
      break;
    case "Rock":
      result.innerHTML =
        computerChoice === "Scissors" ? "You win" : "Computer win";
      break;
    case "Paper":
      result.innerHTML =
        computerChoice === "Scissors" ? "Computer win" : "You win";
      break;
    case "Scissors":
      result.innerHTML = computerChoice === "Rock" ? "Computer win" : "You win";
      break;
    default:
      result.innerHTML = "Something went wrong";
      break;
  }
}

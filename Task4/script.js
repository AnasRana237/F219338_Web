$(document).ready(function() {
  let userScore = 0;
  let computerScore = 0;

  const choices = ["rock", "paper", "scissors"];

  // Function to get user choice based on clicked image id
  const getUserChoice = function(imageId) {
    return choices.find(choice => choice === imageId.replace("rock", ""));
  };

  // Attach click event handler to each image
  $(".choices img").click(function() {
    const userChoice = getUserChoice($(this).attr("id")); // Get user choice from clicked image id
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScore(winner);
    displayResults(userChoice, computerChoice, winner);
  });

  const getComputerChoice = function() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const updateScore = function(winner) {
    if (winner === "user") {
      userScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
    $("#user-score").text(userScore);
    $("#computer-score").text(computerScore);
  };

  const displayResults = function(userChoice, computerChoice, winner) {
    $("#user-choice").text(userChoice);
    $("#computer-choice").text(computerChoice);
    if (winner) {
      alert(`You ${winner === "user" ? "win" : "lose"}!`);
    } else {
      alert("It's a tie!");
    }
  };

  // Function to determine winner based on user and computer choices
  const determineWinner = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return null; // Tie
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return "user";
      } else {
        return "computer";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "user";
      } else {
        return "computer";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return "user";
      } else {
        return "computer";
      }
    }
  };

});

console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ||userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!');
  }

};
const getComputerChoice = () =>{const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber){
  case 0:
  return 'rock';
  
  case 1:
  return 'paper';
  
  case 2:
  return 'scissors';
  
}
};
 
 const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Sorry, computer won';
    } else {
      return 'Congratulations, you won';
    }
    if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'bomb'){
  return 'You won!';
} 
}
  }
 
  const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
    
   


playGame();

  

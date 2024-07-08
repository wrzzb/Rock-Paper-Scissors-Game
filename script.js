      const rockButton = document.getElementById("rock-you")
      const paperButton = document.getElementById("paper-you")
      const scissorsButton = document.getElementById("scissors-you")
      const botRock = document.getElementById("rock-bot")
      const botPaper = document.getElementById("paper-bot")
      const botScissors = document.getElementById("scissors-bot")
      let playerScore = 0;
      let botScore = 0;

        function game(playerChoice) 
        {
          botRock.style.display = 'none'
          botPaper.style.display = 'none'
          botScissors.style.display = 'none'
          
          const choices = ['rock', 'paper', 'scissors'];
          const botChoice = choices[Math.floor(Math.random() * choices.length)];

          const resultincon =  console.log("Bot picks " + botChoice)
          console.log("you pick " + playerChoice);

            if (botChoice == 'rock') {
              botRock.style.display = 'inline';
            }
            else if (botChoice == 'paper'){
              botPaper.style.display = 'inline';
            }
            else{
              botScissors.style.display = 'inline';
            }
          
          const result = getResult(playerChoice, botChoice)
      
          function getResult(playerChoice, botChoice) {
            if (playerChoice === botChoice) {
              console.log('draw..');
            } else if (
                (playerChoice === 'rock' && botChoice === 'scissors') ||
                (playerChoice === 'paper' && botChoice === 'rock') ||
                (playerChoice === 'scissors' && botChoice === 'paper')
            ) {
              console.log('you win! your current score ' + playerScore);
              playerScore++;
            } else {
              console.log('you lose! bots score ' + botScore);
              botScore++;
            }
        }
        
        if (playerScore === 5  || botScore === 5) {
          if (playerScore > botScore) {
            document.getElementById('message-win').style.display = 'block';
            //resetPoints(); 
          }
          else{
            document.getElementById('message-lose').style.display = 'block';
           //resetPoints(); 
          }    
          document.getElementById("play-again").style.display = 'block'; 
          paperButton.style.display = 'none'
          rockButton.style.display = 'none'
          scissorsButton.style.display = 'none' 
          botRock.style.display = 'none'
          botPaper.style.display = 'none'
          botScissors.style.display = 'none'
        }
        document.getElementById("playerScore").innerText = playerScore;
        document.getElementById("botScore").innerText = botScore;
        }
        function hideMessage() {
          document.getElementById('message-lose').style.display = 'none';
          document.getElementById('message-win').style.display = 'none';
          document.getElementById('play-again').style.display = 'none';
      }
      function resetGame() {
          hideMessage();
          playerScore = 0;
          botScore = 0;
          document.getElementById("playerScore").innerText = playerScore;
          document.getElementById("botScore").innerText = botScore;
          paperButton.style.display = 'inline'
          rockButton.style.display = 'inline'
          scissorsButton.style.display = 'inline' 
      }

          
                
    




//let win = document.getElementById('message-win').style.display = 'block';
//const result = Math.random() < 0.5 ? 'win' : 'lose';
//if (result === 'win') {
//    playerScore++;
////} else {
//    botScore++;
//}
//updateScore();
//}

//function updateScore() {
//document.getElementById('playerScore').textContent = playerScore;
//document.getElementById('botScore').textContent = botScore;

///if (playerScore >= 5 || botScore >= 5) {
  
//document.getElementById('filterButton').addEventListener('click', function() {
  // var messages = document.getElementsByClassName('message');
    
   // for (var i = 0; i < messages.length; i++) {
    //  var message = messages[i];
      
     // if (message.style.backgroundColor === 'rgb(204, 204, 204)') {
     //   message.classList.add('hide');
     // } else {
     //   message.classList.remove('hide');
    //  }
   // }
 // });
 
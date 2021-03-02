	//John Fitzgerald r00156081


	//intialise the scores
	let userScore = 0;
	let cpuScore = 0;


	//here I want to use the username in the scoreboard 
	document.getElementById("myName").innerHTML=localStorage.getItem("txtValue");

	//set the constants for use in calculations
	const userScore_span = document.getElementById("user-score");
	const cpuScore_span = document.getElementById("cpu-score");
	const restart = document.getElementById("restart");
	const result = document.getElementById ("result")
	const modal = document.querySelector(".modal");
	const rock_div = document.getElementById("rock");
	const paper_div = document.getElementById("paper");
	const scissors_div = document.getElementById("scissors");

	//of the 3 choices - generate a random choice for computer
	function getCpuChoice() {
	  const choices = ['rock', 'paper', 'scissors'];
	  const randomNumber = Math.floor(Math.random() * 3);
	  return choices[randomNumber];
	}

	//3 functions here to manage win, lose and draw
	//adding to userscore depending on which function is run
	//displaying text
	function win(userChoice, cpuChoice) {
	  userScore++;
	  userScore_span.innerHTML = userScore;
	  cpuScore_span.innerHTML = cpuScore;
	  result.innerHTML = `<h1 class="text-win">WIN!!!</h1> <p>HAL selected <strong>${cpuChoice}</strong></p>`;
	  modal.style.display = 'block';
	}
	function lose(userChoice, cpuChoice){
	  cpuScore++;
	  userScore_span.innerHTML = userScore;
	  cpuScore_span.innerHTML = cpuScore;
	  result.innerHTML = `<h1 class="text-lose">LOST</h1> <p>HAL selected <strong>${cpuChoice}</strong></p>`; 
	  modal.style.display = 'block'
	}
	function draw(userChoice, cpuChoice){
	  userScore_span.innerHTML = userScore;
	  cpuScore_span.innerHTML = cpuScore;
	  result.innerHTML = `<h1>DRAW</h1> <p>You both selected <strong>${cpuChoice}</strong></p>`;
	  modal.style.display = 'block'
	}

	//function to evaluate the choice vs computer
	//based on the order of the answers
	//call the win, lose, draw function to display the correct result 
	function play(userChoice) {
	  //call the random function to get the 
	  // computers pick   
	  const cpuChoice = getCpuChoice();
	  //concat the 2 choices and then evaluate the outcome  
	  switch (userChoice + cpuChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
		  win(userChoice, cpuChoice);
		  break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
		  lose(userChoice, cpuChoice);
		  break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
		  draw(userChoice, cpuChoice);
		  break;
	  }
	}

	//pick up the selection made by the user 
	//and call the play function, passing in the selection
	function main() { 
	  rock_div.addEventListener('click', function() {
		play('rock');
	  })
	  
	  paper_div.addEventListener('click', function() {
		play('paper');
	  })
	  
	  scissors_div.addEventListener('click', function() {
		play('scissors');
	  })
	}

	//intialize modal 
	function clearModal(e){
	  if(e.target == modal) {
		modal.style.display = "none"
	  }
	}

	//intialize the scores for a new game
	function restartGame(){
	  userScore = 0;
	  cpuScore = 0;
	  userScore_span.innerHTML = userScore;
	  cpuScore_span.innerHTML = cpuScore;
	}

	//run a function to intialize the scores
	restart.addEventListener('click', restartGame);
	//clear anywhere on screen to end result display
	window.addEventListener('click', clearModal);
	//start the game
	main();
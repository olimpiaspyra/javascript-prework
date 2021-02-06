function playGame (playerInput) {

	clearMessages();

	let randomNumber = Math.floor (Math.random() * 3 + 1);

	console.log ('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName (randomNumber);
	let playerMove = getMoveName (playerInput);	

	// if (randomNumber == 1) {
	//   computerMove = 'kamień';
	// } else if (randomNumber == 2) {
	// 	computerMove = 'papier';
	// } else if (randomNumber == 3) {
	// 	computerMove = 'nożyce';
	// }

	function getMoveName (argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2){
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		}
	}

	printMessage ('Mój ruch to: ' + computerMove);	
	printMessage ('Twój ruch to: ' + playerMove);
	console.log ('Mój ruch to: ' + computerMove);
	console.log ('Twój ruch to: ' + playerMove);	

	// let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); 	

	// if (playerInput == '1') {
	//   playerMove = 'kamień';
	// } else if (playerInput == '2') {
	// 	playerMove = 'papier';
	// } else if (playerInput == '3') {
	// 	playerMove = 'nożyce';
	// }	

	// if (computerMove == 'kamień' && playerMove == 'papier') {
	// 	printMessage ('Ty wygrywasz!'); 
	// } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
	// 	printMessage ('Ja wygrywam!');
	// } else if (computerMove == 'papier' && playerMove == 'kamień') {
	// 	printMessage ('Ja wygrywam!')
	// } else if (computerMove == 'papier' && playerMove == 'nożyce') {
	// 	printMessage ('Ty wygrywasz!')
	// } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	// 	printMessage ('Ty wygrywasz!')
	// } else if (computerMove == 'nożyce' && playerMove == 'papier') {
	// 	printMessage ('Ja wygrywam!')
	// } else if (computerMove == playerMove) {
	// 	printMessage ('Remis!')
	// } else if (playerMove == 'nieznany ruch') {
	// 	printMessage ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
	// }	

	function displayResult (argComputerMove, argPlayerMove) {
		console.log ('moves:', argComputerMove, argPlayerMove);
		
		printMessage ('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage ('Ty wygrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage ('Ty wygrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage ('Ty wygrywasz!');
		} else if (computerMove == playerMove) {
			printMessage ('Remis!');
		} else {
		printMessage('Tym razem przegrywasz :(');
		}
	}

	displayResult (computerMove, playerMove);
}

	document.getElementById ('play-rock').addEventListener('click', function() {
		playGame (1)});

	document.getElementById ('play-paper').addEventListener ('click', function() {
		playGame (2)});

	document.getElementById ('play-scissors').addEventListener ('click', function() {
		playGame (3)});
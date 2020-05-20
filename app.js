const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const resetBtn = document.querySelector('.reset-button');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            resetBtn.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        const resetGame = document.querySelector('.reset-button');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function() {
                this.style.animation = "";
            });
        });
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        resetGame.addEventListener('click', () => {
            const winner = document.querySelector('.winner');
            pScore, cScore = 0;
            updateScore();
            winner.textContent = "Choose an Option";
        })

        options.forEach( option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() =>{
                compareHands(this.textContent, computerChoice);
                updateScore();
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    
        const compareHands = (playerChoice, computerChoice) => {
            const winner = document.querySelector('.winner');
            if (playerChoice === computerChoice) {
                winner.textContent = "it's a tie";
                return;
            }

            if (playerChoice === 'rock') {
                if(computerChoice === 'scissors') {
                    winner.textContent ="Player Wins";
                    pScore++;
                    return;
                }

                else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    return;
                }
            }
            if (playerChoice === 'paper') {
                if(computerChoice === 'rock') {
                    winner.textContent ="Player Wins";
                    pScore++;
                    return;
                }

                else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    return;
                }
            }
            if (playerChoice === 'scissors') {
                if(computerChoice === 'paper') {
                    winner.textContent ="Player Wins";
                    pScore++;
                    return;
                }

                else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    return;
                }
            }
        }
    startGame();
    playMatch();
};

game();
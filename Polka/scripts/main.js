// Polka - Tic-tac-toe with polka dots



const game_objects = {
    
    boxes: {
        
        
        box1: document.getElementById('box1'),
        
        box2: document.getElementById('box2'),
        
        box3: document.getElementById('box3'),
        
        box4: document.getElementById('box4'),
        
        box5: document.getElementById('box5'),
        
        box6: document.getElementById('box6'),
        
        box7: document.getElementById('box7'),
        
        box8: document.getElementById('box8'),
        
        box9: document.getElementById('box9')
       
        
    },
    
    /* When I arranged the boxes in CSS I aranged them like so:
    
    box 1 on top left, box 4 on top middle, box 7 on top right, box 2 on middle left, box 5 on middle middle... and so on.
    
    
    a reference for box positions
    
    1 - 4 - 7 
    2 - 5 - 8 
    3 - 6 - 9
    
    
    why is this usefull ? Well in case you want to change something in the CSS you know how the boxes are positioned. 
    
    */
    
    polka_dots: {
        
        
        polka1: document.getElementById('polka1'),
        
        polka2: document.getElementById('polka2'),
        
        polka3: document.getElementById('polka3'),
        
        polka4: document.getElementById('polka4'),
        
        polka5: document.getElementById('polka5'),
        
        polka6: document.getElementById('polka6'),
        
        polka7: document.getElementById('polka7'),
        
        polka8: document.getElementById('polka8'),
        
        polka9: document.getElementById('polka9'),
        
    },
    
    currentPlayerDisplay: document.getElementById('current_player'),
    
    playerTurnTxt: document.getElementById("player_turn_data")
    
    
    
    
};






// Game data 

const game_data = 
{
    winDisplayCount: 0,
    
    playerColors: 
    {
       player1Col: "#ffcc78",
       player2Col: "#f798ad"
    },
    
    boxesOccupied: {
        box1: false,
        box2: false,
        box3: false,
        box4: false,
        box5: false,
        box6: false,
        box7: false,
        box8: false,
        box9: false
    },
    
    
    
    boxResidents: {
        box1: null,
        box2: null,
        box3: null,
        box4: null,
        box5: null,
        box6: null,
        box7: null,
        box8: null,
        box9: null
        
        // This stores data about who currently occupies a box. They are all set to null, meaning no one occupies them.
        
        // When a box is clicked, if it is vacant we give the box ownership to the player who clicked the box. 
        
        // eg if player 1 clicks box 2 then boxResidents.box2 = 1 ( for player 1)
        
        // These properties can have only 3 values : null, 1 and 2 (for player 1 and player 2 )
    },
    
    winState: false,
    winner: null,
    
    
    currentPlayer: 1,
    
    enterAbility: true,
    
    vacancyCount: 9
    
    
};


game_objects.currentPlayerDisplay.style.colour = game_data.playerColors.player1Col;


    
// BOX event listeners for each box div 
    
game_objects.boxes.box1.addEventListener('click', () => {
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {    
        if(game_data.boxesOccupied.box1 == false) {
        game_data.boxesOccupied.box1 = true;
        game_data.vacancyCount--;
            
        occupy(game_data.currentPlayer, 1, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box1);
        }
    } 
        
        // occupy( int CurrentPlayer, int boxNumber)
        // boxNumber is passed in to use with switch cases in occupy(). If boxNumber = 1, then polka dot 1 will be visible. If boxNumber = 2, then polka dot 2 will be visible
        
        // Each box when clicked passes in their box number as an argument to occupy() - only if the box clicked is not taken
        
        
        
        
        
        // warningF(boxNumber) - if boxesOccupied.box1 == true, it means box 1 is occupied so it passes boxResidents.box1 as an argument to warningF() and warningF() checks who the owner of box1 is and alerts a message 
        
        // The same is done for all other boxes up to 9
        
});
    
    
game_objects.boxes.box2.addEventListener('click', () => {

    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {   
        if(game_data.boxesOccupied.box2 == false) {
            game_data.vacancyCount--;
            game_data.boxesOccupied.box2 = true;
               
               
            occupy(game_data.currentPlayer, 2, game_data.vacancyCount);
               
               
        } else {
            warningF(game_data.boxResidents.box2);
        }
    }
});
    
    
game_objects.boxes.box3.addEventListener('click', () => {
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {
            
        if(game_data.boxesOccupied.box3 == false) {
            game_data.boxesOccupied.box3 = true;
            game_data.vacancyCount--;        
            occupy(game_data.currentPlayer, 3, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box3);
        }
    } 
});
    
game_objects.boxes.box4.addEventListener('click', () => {
    
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {
        if(game_data.boxesOccupied.box4 == false) {
            game_data.boxesOccupied.box4 = true;
            game_data.vacancyCount--;
                
            occupy(game_data.currentPlayer, 4, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box4);
        }
    }  
});
    
    
game_objects.boxes.box5.addEventListener('click', () => {
    
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {
        if(game_data.boxesOccupied.box5 == false) {
            game_data.boxesOccupied.box5 = true;
            game_data.vacancyCount--;        
            occupy(game_data.currentPlayer, 5, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box5);
        }
    }
});
    
    
game_objects.boxes.box6.addEventListener('click', () => {
    
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {  
        if(game_data.boxesOccupied.box6 == false) {
            game_data.boxesOccupied.box6 = true;
            game_data.vacancyCount--;        
            occupy(game_data.currentPlayer, 6, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box6);
        }
    }
});
    
    
game_objects.boxes.box7.addEventListener('click', () => {
    
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {
        if(game_data.boxesOccupied.box7 == false) {
            game_data.boxesOccupied.box7 = true;
            game_data.vacancyCount--;        
            occupy(game_data.currentPlayer, 7, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box7);
        }
    }
});
    
    
game_objects.boxes.box8.addEventListener('click', () => {
    
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {    
        if(game_data.boxesOccupied.box8 == false) {
            game_data.boxesOccupied.box8 = true;
            game_data.vacancyCount--;        
            occupy(game_data.currentPlayer, 8, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box8);
        }
    }
});
    
    
game_objects.boxes.box9.addEventListener('click', () => {
    
    
    if(game_data.enterAbility == true && game_data.winState == false && game_data.winner == null) {
        if(game_data.boxesOccupied.box9 == false) {
            game_data.boxesOccupied.box9 = true;
            game_data.vacancyCount--;        
            occupy(game_data.currentPlayer, 9, game_data.vacancyCount);
        } else {
            warningF(game_data.boxResidents.box9);
        }
    }
});



function occupy(currentPlayer, currentBox, vacancyCount) {
    
    
    
   // polkaDot.style.opacity = "100%";
    
    
    
    // When a box is clicked, if it is not occupied it calls this function occupy()
    
    // Here we check the current player, if it is 1 we check the current box which is passed in as an parameter when a box is clicked 
    // eg : if box 9 is clicked it will pass 9 as the "currentBox" argument. 
    
    
    
    if(currentPlayer == 1) {
        switch(currentBox) {
            case 1:
                game_data.boxResidents.box1 = 1; // In here we check the current box, if it is 1 ( case 1: ) we will give box ownership to 1 ( palyer 1)
                
                // Box 1 becomes the resident of box 1, the value of game_data.boxResidents.box1 becomes 1, we store this data so we can later check who wins or if a box is occupied by someone.
                
                
                // If the currentPlayer variable was equal to 2 and currentBox was equal to 1 we would give box1 to player 2. 
                
                // eg: game_data.boxResidents.box1 = 2
                
                
                
                
                game_objects.polka_dots.polka1.style.opacity = "100%";
                game_objects.polka_dots.polka1.style.background = game_data.playerColors.player1Col;
                break;
            case 2:
                game_data.boxResidents.box2 = 1;
                game_objects.polka_dots.polka2.style.opacity = "100%";
                game_objects.polka_dots.polka2.style.background = game_data.playerColors.player1Col;
                break;
            case 3:
                game_data.boxResidents.box3 = 1;
                
                
                game_objects.polka_dots.polka3.style.opacity = "100%";
                game_objects.polka_dots.polka3.style.background = game_data.playerColors.player1Col;
                break;
            case 4:
                game_data.boxResidents.box4 = 1;
                
                
                game_objects.polka_dots.polka4.style.opacity = "100%";
                game_objects.polka_dots.polka4.style.background = game_data.playerColors.player1Col;
                break;
            case 5:
                game_data.boxResidents.box5 = 1;
                
                game_objects.polka_dots.polka5.style.opacity = "100%";
                game_objects.polka_dots.polka5.style.background = game_data.playerColors.player1Col;
                break;
            case 6:
                game_data.boxResidents.box6 = 1;
                
                game_objects.polka_dots.polka6.style.opacity = "100%";
                game_objects.polka_dots.polka6.style.background = game_data.playerColors.player1Col;
                break;
            case 7:
                game_data.boxResidents.box7 = 1;
                
                game_objects.polka_dots.polka7.style.opacity = "100%";
                game_objects.polka_dots.polka7.style.background = game_data.playerColors.player1Col;
                break;
            case 8:
                game_data.boxResidents.box8 = 1;
                
                game_objects.polka_dots.polka8.style.opacity = "100%";
                game_objects.polka_dots.polka8.style.background = game_data.playerColors.player1Col;
                break;
            case 9:
                game_data.boxResidents.box9 = 1;
                
                game_objects.polka_dots.polka9.style.opacity = "100%";
                game_objects.polka_dots.polka9.style.background = game_data.playerColors.player1Col;
                break;
                
        }
        
        game_data.currentPlayer = 2;
        // Sets current player to player 2 after all changes have been made
        
        
        // These deal with the coloured number text that displays the current player on the top left corner of the screen 
        
        game_objects.currentPlayerDisplay.innerHTML = 2;
        
        
        game_objects.currentPlayerDisplay.style.color = game_data.playerColors.player2Col;
        
        
        
       
        
    }
    
    if(currentPlayer == 2) {
        
        switch(currentBox) {
            case 1:
                game_data.boxResidents.box1 = 2;
                
                game_objects.polka_dots.polka1.style.opacity = "100%";
                game_objects.polka_dots.polka1.style.background = game_data.playerColors.player2Col;
                break;
            case 2:
                game_data.boxResidents.box2 = 2;
                
                game_objects.polka_dots.polka2.style.opacity = "100%";
                game_objects.polka_dots.polka2.style.background = game_data.playerColors.player2Col;
                break;
            case 3:
                game_data.boxResidents.box3 = 2;
                game_objects.polka_dots.polka3.style.opacity = "100%";
                game_objects.polka_dots.polka3.style.background = game_data.playerColors.player2Col;
                break;
            case 4:
                game_data.boxResidents.box4 = 2;
                game_objects.polka_dots.polka4.style.opacity = "100%";
                game_objects.polka_dots.polka4.style.background = game_data.playerColors.player2Col;
                break;
            case 5:
                game_data.boxResidents.box5 = 2;
                game_objects.polka_dots.polka5.style.opacity = "100%";
                game_objects.polka_dots.polka5.style.background = game_data.playerColors.player2Col;
                break;
            case 6:
                game_data.boxResidents.box6 = 2;
                game_objects.polka_dots.polka6.style.opacity = "100%";
                game_objects.polka_dots.polka6.style.background = game_data.playerColors.player2Col;
                break;
            case 7:
                game_data.boxResidents.box7 = 2;
                game_objects.polka_dots.polka7.style.opacity = "100%";
                game_objects.polka_dots.polka7.style.background = game_data.playerColors.player2Col;
                break;
            case 8:
                game_data.boxResidents.box8 = 2;
                game_objects.polka_dots.polka8.style.opacity = "100%";
                game_objects.polka_dots.polka8.style.background = game_data.playerColors.player2Col;
                break;
            case 9:
                game_data.boxResidents.box9 = 2;
                game_objects.polka_dots.polka9.style.opacity = "100%";
                game_objects.polka_dots.polka9.style.background = game_data.playerColors.player2Col;
                break;
            
        }
        
       // polkaDot.style.background = game_data.playerColors.player2Col;
        
        game_data.currentPlayer = 1;
    
        game_objects.currentPlayerDisplay.innerHTML = 1;
        
        game_objects.currentPlayerDisplay.style.color = game_data.playerColors.player1Col;
        
    
    }
    
    
    checkWinner(game_data.boxResidents.box1,game_data.boxResidents.box2,game_data.boxResidents.box3,game_data.boxResidents.box4,game_data.boxResidents.box5,game_data.boxResidents.box6,game_data.boxResidents.box7,game_data.boxResidents.box8,game_data.boxResidents.box9);
    
    console.log(game_data.vacancyCount);
    
    if(vacancyCount == 0) {
        
        checkWinner(game_data.boxResidents.box1,game_data.boxResidents.box2,game_data.boxResidents.box3,game_data.boxResidents.box4,game_data.boxResidents.box5,game_data.boxResidents.box6,game_data.boxResidents.box7,game_data.boxResidents.box8,game_data.boxResidents.box9);
        
    }
    
}


function warningF(owner) {
    // owner is game_data.boxResidents properties ( any box ) - each box passes their own box number as an argument when clicked while being occupied.
    
    // owner is equal to the integer stored in game_data.boxResidents properties
    
    // If owner is equal to game_data.boxResidents.box1 it will show the owner of box1 ( an integer )
    
    alert("Box is owned by : Player " + owner);
}


function checkWinner(box1,box2,box3,box4,box5,box6,box7,box8,box9) {
    
    
    
    // Player 1 position/win checking 
    
    if(box1 == 1 && box4 == 1 && box7 == 1) {
        announceWinner(1);
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
        
    }else if(box2 == 1 && box5 == 1 && box8 == 1) {
        announceWinner(1);
        
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
    }else if(box3 == 1 && box6 == 1 && box9 == 1) {
        announceWinner(1);
        
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
    }else if(box1 == 1 && box5 == 1 && box9 == 1) {
        announceWinner(1);
        
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
    }else if(box7 == 1 && box5 == 1 && box3 == 1) {
        announceWinner(1);
        
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
    }else if(box1 == 1 && box2 == 1 && box3 == 1) {
        announceWinner(1);
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
    }else if(box4 == 1 && box5 == 1 && box6 == 1) {
        announceWinner(1);
        
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
        
    }else if(box7 == 1 && box8 == 1 && box9 == 1) {
        announceWinner(1);
        
        game_data.winState = true;
        game_data.winner = 1;
        game_data.enterAbility = false;
    }
    
    
    
    
    
    
    
    
    
    // Player 2 position/win checking
    
    
    
    if(box1 == 2 && box4 == 2 && box7 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box2 == 2 && box5 == 2 && box8 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box3 == 2 && box6 == 2 && box9 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box1 == 2 && box5 == 2 && box9 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box7 == 2 && box5 == 2 && box3 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box1 == 2 && box2 == 2 && box3 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box4 == 2 && box5 == 2 && box6 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
        
    }else if(box7 == 2 && box8 == 2 && box9 == 2) {
        announceWinner(2);
        
        game_data.winState = true;
        game_data.winner = 2;
        game_data.enterAbility = false;
    }
    
}

function announceWinner(winner) {
    setTimeout(function() {
    
        game_objects.currentPlayerDisplay.innerHTML = " ";
        game_objects.playerTurnTxt.innerHTML = "Player " + winner + " has won ! ";
    
    },500);
    
    setTimeout(function() {   
        alert("Player " + winner + " has won !");
        document.write('<h2>Player ' + winner + ' Has Won !</h2>');
        document.write("Refresh browser to restart !");
    },1500);
    
}

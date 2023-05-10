"use strict"

var rockandpeppers = ["w","d","s"];
var Player1Score = 0;
var Player2Score = 0;


function randomRockPeppersSelector (arr){
    var randomNumber = Math.floor(Math.random() * arr.length);

    return arr [randomNumber];
}

randomRockPeppersSelector (rockandpeppers);




function startGame (e){
    var firsPlayerChoose = e.key;

    if(!rockandpeppers.includes(firsPlayerChoose)){
        prompt("please click the correct words [ w , s , d ]")
        return;
    }
    
    

    var CompPlayerChoose = randomRockPeppersSelector(rockandpeppers);

    console.log("CompPlayerChoose" , CompPlayerChoose);
    console.log("firsPlayerChoose" , firsPlayerChoose);

    if((firsPlayerChoose === "w" && CompPlayerChoose === "d" ) ||
       (firsPlayerChoose === "d" && CompPlayerChoose === "s" ) ||
       (firsPlayerChoose === "s" && CompPlayerChoose === "w" )  
    ){
        console.log("You Win");
        console.log("Computer Lose");

        PlayerRockTitle.innerHTML = "You Win";
        PlayerRockTitle.style.color = "#edc5ab";

        PlayerSeezerTitle.innerHTML = "Computer Lose"
        PlayerRockTitle.style.color = "#b9848c";
        
        Player1Score +=1
        showRockPeppers(firsPlayerChoose ,CompPlayerChoose);

    }else if((firsPlayerChoose === "w" && CompPlayerChoose === "w" ) ||
             (firsPlayerChoose === "d" && CompPlayerChoose === "d" ) ||
             (firsPlayerChoose === "s" && CompPlayerChoose === "s" )  
    ){
        console.log("YOU DRAW");
        showRockPeppers(firsPlayerChoose ,CompPlayerChoose);
        PlayerRockTitle.innerHTML = "You Draw";
        PlayerRockTitle.style.color = "#edc5ab";


        PlayerSeezerTitle.innerHTML = "Computer Draw"
        PlayerRockTitle.style.color = "#b9848c";
    }else{
        console.log("YOU LOSE");
        console.log("COMPUTER WIN");
        Player2Score +=1

        PlayerRockTitle.innerHTML = "You Lose";
        PlayerRockTitle.style.color = "#edc5ab";

        PlayerSeezerTitle.innerHTML = "Computer Win"
        PlayerRockTitle.style.color = "#b9848c";
        
        showRockPeppers(firsPlayerChoose ,CompPlayerChoose);

    }
      
    console.log("Player1Score" , Player1Score);
    console.log("Player2Score" , Player2Score);

}


function showRockPeppers (p1,p2){

    PlayerRocktFirstScore.innerHTML = Player1Score;
    PlayerRocktSecondScore.innerHTML = Player2Score;
    
   
    

    PlayerFirstRock.src = "./image/kagit.jpg";
    PlayerSecondPepper.src = "./image/makas.jpg";
}



window.addEventListener("keyup" , startGame );
document.body.style.backgroundImage = "url('./image/galaxy.jpg')";
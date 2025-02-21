

let choices=document.querySelectorAll(".choice");          
let end =document.querySelector(".endgame_btn");
let displayWin= document.querySelector("#display_winner");
let uScore=document.querySelector("#u_score");
let cScore=document.querySelector("#c_score");
let rock=document.querySelector("#c_rock");
let scissors=document.querySelector("#c_scissors");
let paper=document.querySelector("#c_paper");
let reset=document.querySelector(".reset_btn");

alert("User enter your choice on the left");

// getting user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",function(){
        let userChoice=choice.getAttribute("id");
        game(userChoice);
    })
})

 let compChoice="";  
  // generate the comp choice 
const getCompChoice=()=>{                            
    const options=["rock","paper","scissors"];
    const compNumber=Math.floor(Math.random()*3);
    return options[compNumber]; // arr[number] simply
}




// calculating the score and declaring the winner 
 let userScore=0;          // declaring the values to zero 
 let compScore=0;
const showWinner=(userWin)=>{                  
   
    if(userWin){                               
        userScore++;                            // adds one more to the initial value , if it wins
        console.log( "User score is :",userScore);       // tracks the score
        uScore.textContent=userScore;                  // displays the userscore
        displayWin.textContent=  "YOU WON ";            
    }
    else{
        compScore++;
        console.log("Comp score is:",compScore);
        cScore.textContent=compScore;
        displayWin.textContent=  "COMPUTER WON ";  
    }
}

const resetBorder=()=>{
    rock.style.border = "none";
    paper.style.border = "none";
    scissors.style.border = "none";
}

// main logic behind the game
const game=(userChoice)=>{  
    resetBorder();     // resetting the borders
    compChoice=getCompChoice();   // GETTING THE COMP VALUE
console.log("comp choice=",compChoice);
console.log("user choice=",userChoice); 

if(userChoice===compChoice){  //CONDITION ONE
    console.log("It's a DRAW!");
    displayWin.textContent="IT IS A DRAW!";
}
else{
    let userWin= true;          
    if(userChoice==="rock"){      // user gets rock
        userWin=compChoice==="paper"?false:true;  // paper>rock,rock>scissors
    }

if(userChoice==="paper"){     //if user chooses paper
userWin=compChoice==="rock"?true:false //paper>rock,scisscors>paper
}

if(userChoice==="scissors"){     // when user chooses scisscors
    userWin=compChoice==="scissors"?true:false;//scisscors>paper,rock>scisscors
}

showWinner(userWin);     // imp to pass userwin as argument 
}

// highlighting the computer's choice
if(compChoice==="rock"){
    rock.style.border=" 5px solid pink";
    }
    else if(compChoice==="paper"){
        paper.style.border= "5px solid blue";
    }
    else{
        scissors.style.border="5px solid yellow";
    }
}

// declaring the final winner
const winner=()=>{
if(userScore>compScore){
    displayWin.textContent=`You won with ${userScore} poitnts!`;
}
else if (userScore<compScore){
    displayWin.textContent=`Computer won with ${compScore} poitnts!`;
}
else{
    displayWin.textContent="The match was DRAW!";
}
}

end.addEventListener("click",function(){
    winner();
});

const resetGame=()=>{
    userScore=0;
    compScore=0;
    uScore.textContent="0";
    cScore.textContent=" 0";
displayWin.textContent="";
}
reset.addEventListener("click",()=>{
    resetGame();
})








// let choices=document.querySelectorAll(".choice");          
// let end =document.querySelector(".endgame_btn");
// let displayWin= document.querySelector("#display_winner");
// let uScore=document.querySelector("#u_score");
// let cScore=document.querySelector("#c_score");
// let rock=document.querySelector("#c_rock");
// let scissors=document.querySelector("#c_scissors");
// let paper=document.querySelector("#c_paper");

// alert("User enter your choice on the left");

// // getting user choice
// choices.forEach((choice)=>{
//     choice.addEventListener("click",function(){
//         let userChoice=choice.getAttribute("id");
//         game(userChoice);
//     })
// })


//  let compChoice="";  //by declaring it like this allows it to be used in various functions instead of just one 
//   // generate the comp choice 
// const getCompChoice=()=>{                            
//     const options=["rock","paper","scissors"];
//     const compNumber=Math.floor(Math.random()*3);
//     return options[compNumber]; // arr[number] simply
// }

// // calculating the score and declaring the winner
//  let userScore=0;          // declaring the values to zero 
//  let compScore=0;
// const showWinner=(userWin)=>{                   // to calculate the score , only the T & F condition applies because , only one sitautuon 
   
//     if(userWin){                               // will take place
//         userScore++;                            // adds one more to the initial value , if it wins
//         console.log( "User score is :",userScore);       // tracks the score
//         // uScore.appendChild(userScore);       // you cannot append text or number u can only append node 
//         uScore.textContent=userScore;
//         displayWin.textContent=  "YOU WON ";            // make note of the syntax here 
//     }
//     else{
//         console.log("you lost, the comp won!");
//         compScore++;
//         console.log("Comp score is:",compScore);
//         // cScore.appendChild(compScore);
//         cScore.textContent=compScore;
//         displayWin.textContent=  "COMPUTER WON ";  
//     }
// }

// const resetBorder=()=>{
//     rock.style.border = "none";
//     paper.style.border = "none";
//     scissors.style.border = "none";
// }

// // main logic behind the game
// const game=(userChoice)=>{  

//     resetBorder();
//     compChoice=getCompChoice();                            // GETTING THE COMP VALUE
// console.log("comp choice=",compChoice);
// console.log("user choice=",userChoice); 

// if(userChoice===compChoice){                                     //CONDITION ONE
//     console.log("It's a DRAW!");
//     displayWin.textContent="IT IS A DRAW!";
// }
// else{
//     let userWin= true;          
//     if(userChoice==="rock"){      // user gets rock
//         userWin=compChoice==="paper"?false:true;
//     }

// if(userChoice==="paper"){     //if user chooses paper
// userWin=compChoice==="rock"?true:false //paper>rock,scisscors>paper
// }

// if(userChoice==="scissors"){     // when user chooses scisscors
//     userWin=compChoice==="scissors"?true:false;//scisscors>paper,rock>scisscors
// }

// showWinner(userWin);     // imp to pass userwin as argument 
// }

// if(compChoice==="rock"){
//     rock.style.border=" 5px solid pink";
//     }
//     else if(compChoice==="paper"){
//         paper.style.border= "5px solid blue";
//     }
//     else{
//         scissors.style.border="5px solid yellow";
//     }
// }

// // declaring the final winner
// const winner=()=>{
// if(userScore>compScore){
//     displayWin.textContent=`You won with ${userScore} poitnts!`;
// }
// else if (userScore<compScore){
//     displayWin.textContent=`Computer won with ${compScore} poitnts!`;
// }
// else{
//     displayWin.textContent="The match was DRAW!";
// }
// }

// end.addEventListener("click",function(){
//     winner();
// });











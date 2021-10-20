 // =================== Declaration ==================== //

 const randomNumber = Math.floor(Math.random()*49+1)
let chances = 3;
let isWin = false;

// ==================== Declaration ==================== //

// ================= IMPORTS ========================= //

const userGuess = document.querySelector("#number")
const resultDiv = document.querySelector(".result")
const historyDiv = document.querySelector(".history")
const submitButton = document.querySelector("#submit")
const replayDiv = document.querySelector(".replay")

// ================ IMPORTS ========================= //

// console.log(userGuess);

// =================== MAIN FUNCTION ================ //

const game = () => {
    const guess = userGuess.value;
    let result;

    if (guess > 50 || guess < 1) {
        result = "Your GUESS should be <br> 1 to 50"
        resultDiv.innerHTML = `<h2>${result}</h2>`

       // console.log(guess);
       // console.log(randomNumber);

    } else if ( chances && !isWin ) {
        if (randomNumber == guess) {
            result = "✨ YOU won the GAME...! ✨ <br> 🎊 Congratulations...🎊 <br>  🎉 🎉 YOU are the ✨😍 🥵 WINNER  🥵 😍✨  🎉 🎉!!!";
            isWin = true;
        } else if ( randomNumber < guess ) {
            if (chances == 1) {
                result = `Game Over...! <br> The number is ${randomNumber}`
                isWin = true;
            } else {
                result = "YOU too HIGH...! 🥵 Try again 🥵";
                isWin = false
            }
            
        }else if ( randomNumber > guess ) {
            if (chances == 1) {
                result = `Game Over...! <br> The number is ${randomNumber}`
                isWin = true;
            } else {
            result = "YOU too LOW...! 😳 Try again 🥵";
            isWin = false
            }
        }
        chances--;
        historyDiv.innerHTML += `<h4>You Guessed 🥵 ${guess}</h4>`
        return resultDiv.innerHTML = `<h4>${result}</h4>`
    }
    
}

// ================= MAIN FUNCTION =================//

// ================== RELOAD FUNCTION ==============//

const Refresh = () => {
    if (!chances || isWin)
    location.reload()
  }
   /* else if(chances || isWin)
     { 
      result="REPLAY ⏩<br>Try UR best...!"; 
      resultDiv.innerHTML = `<h2>${result}</h2>`; 
     } */
// ================== RELOAD FUNCTION ===============//

 // submitButton.addEventListener('click', game) //




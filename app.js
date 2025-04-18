//generate randome number
let randomNum = Math.floor(Math.random() * 100 )+1;
console.log(randomNum);

// add event on button click
let btn  = document.querySelector("#check");
btn.addEventListener("click", guessNumber);

// this function about to check number is correct or not.
function guessNumber(){
    let guess = document.querySelector("#guessNum").value;
    let res = document.querySelector("#result");
    
    if(guess == "quit"){
        res.innerText = `You quitting the game`;
        return;
    }
    
    if(guess < randomNum){
        res.innerText =  `${guess}, guess number is small.`;
    } else if(guess > randomNum){
        res.innerText =  `${guess}, guess number is large.`;
        return;
    } else if(randomNum == guess) {
        res.innerText = `congratulations, you guess correct number ${guess}`;
    } else {
        res.innerText = `not valid number.`;
    }
}

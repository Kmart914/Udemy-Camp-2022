let maximum = parseInt(prompt("Enter the maximum number!"));

const targetNum = Math.floor(Math.random() * maximum ) + 1;


while (!maximum){
  maximum = parseInt(prompt("Enter a valid numerical number"))

}

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

  while (parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum){
      guess = prompt("Too high, try again");
    } else{
      guess = prompt("Too low, enter a new guess");
    }
  }
    if (guess === 'q'){
      console.log('You quit, try again?');
    } else{
      console.log(`You got it! It took you ${attempts} guess`);

    }







console.log(targetNum);
console.log(maximum);

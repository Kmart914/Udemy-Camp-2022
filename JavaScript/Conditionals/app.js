// console.log('Hello');
//
// let random = Math.random();
//
// if (random < 0.5){
//   console.log("Less than!");
// } else {
//   console.log("greater than");
// }
// console.log(random);
//
//
// let dayOfWeek = prompt('enter a day').toLowerCase();
//
// console.log(dayOfWeek);
//
// if (dayOfWeek === 'monday'){
//   console.log('Ughh Mondays are awful');
// } else if (dayOfWeek === 'tuesday') {
//   console.log('Is it friday yet?');
// } else {
//   console.log('Weekends should be longer');
// }

const password = prompt('Please enter a password');

if (password.length >= 6){
  if (password.indexOf(' ') === -1){
    console.log("Valid Password");
  } else  {
  console.log('password cannot contain spaces');
  }
} else {
  console.log('must be 6+ characters');
}

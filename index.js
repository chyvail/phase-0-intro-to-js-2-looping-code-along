// Code your solutions in this file
function writeCards(names, events) {
  const message = [];
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return message;
}

function countDown(n) {
  let i = n;
  do {
    console.log(i);
    i--;
  } while (i >= 0);
}

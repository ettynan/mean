function fib() {
  // Some variables here
  var firstNum = 0;
  var secondNum = 1;
  var temp = 0;
  function nacci() {
    // do something to those variables here
    console.log(secondNum);
    temp = secondNum;
    secondNum += firstNum;
    firstNum = temp;
    // console.log(secondNum);
  }
  return nacci;
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
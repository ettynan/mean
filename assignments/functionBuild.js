runningLogger();
function runningLogger(){
    console.log("I am running!");
}

function multiplyByTen(value){
    newValue = value * 10;
    return newValue;
}
multiplyByTen(5);
console.log(newValue);

function stringReturnOne(){
    return 'hello there!';
}

function stringReturnTwo(){
    return 'goodbye!';
}

function myDoubleConcoleLog(valueOne, valueTwo){
    if (typeof(valueOne) == "function"){
        console.log(valueOne());
    } 
    if (typeof(valueTwo) == "function"){
        console.log(valueTwo());
    }
}

function valueOne(){
    return "what up?"
}

function valueTwo(){
    return "Outta here!"
}
myDoubleConcoleLog(stringReturnOne, stringReturnTwo);

function caller2(parameter){
    console.log('starting');
    var x = setTimeout(function() {
        if (typeof(parameter) == "function"){
        parameter(stringReturnOne, stringReturnTwo);
    }
    }, 2000);
    console.log('ending');
    return "interesting";
}
caller2(myDoubleConcoleLog);


var argOne;
var idx;

// console.log(returnVal());
// var counter = 0;
function outer(){ //comes in useful 
    var counter = 0;
    // console.log(count());
    
    function count(){
        return ++counter;
    }
    return count;
}
var fart = outer(); //now counter is count
// console.log(fart());
// console.log(fart());
// console.log(fart());

function doesStuff(yesOrNo){ //state based information
    return function doingStuff(){//annonymous function since not defined in the normal way (function stuff()) so can never call doingStuff, but useful to name annonymous function to help on error traces
        if (yesOrNo){
            //do something based on true
            console.log('do things true')
        } else {
            //do something is false
            console.log('do things false')
        }
    }
}
var first = doesStuff(true);
var second = doesStuff(false);

console.log(first());//defined first as a function so need the parenthases
console.log(second());




// console.log(counter());
// console.log(counter());



// function returnVal(){
// //function returnVal(argOne){
// // function returnVal(argOne, argTwo){
//     var thing;

//     thing = 'wat';
//     return thing;
// }

// console.log(thing);
// argOne = "test";

// // var argOne = "test";
// // console.log(returnVal());
// // console.log(returnVal("test"));

// for (var idx = 0; idx<5; idx++){ //not block scoped
//     console.log(idx);
// }
// console.log(idx);

// // for (let idx = 0; idx<5; idx++){ //block scoped - broke since var hoisted idx and let not
// //     console.log(idx);
// // }
// // console.log(idx);
//how to protect information so can't change it
//'use strict';
// function User(name, ssn){ //capital 'U' means constructor function
//     if(!(this instanceof User)){
//         return new User(name, ssn);
//     }
//     this._name = name;//underscore denotes private variable, but it is only really saying don't change this, not locking it
//     this._ssn = ssn;
//     // var objUser = { //'this' creates this user obj when use keyword new
//     //     getName, //E6 shorthand for getName: getName
//     //     getSSN,
//     //     setName, //attach this function to the usrobject
//     // };//object literal is just {}
    
//     // function getName() { //these create new info each time create user
//     //     return name; //
//     // }
// //     function getSSN(){
// //         return ssn;
// //     }
// //     function setName(input){ //have access to name, attach it
// //         if(typeof input !== 'string'){
// //             throw new Error('input must be a string');
// //         }
// //         name = input;
// //     }
// //     return objUser;
// }

// User.prototype.getName = function(){ //takes up less memory when use prototype
//     return this._name; //prototype can't directly access private variable, lose ability to use private
// }       //

// User.prototype.getSSN = function(){
//     return this._ssn;
// }

// // function getName() { 
// //         return name; //
//     // }
// const jason = User('Jason', 234234234);
// // console.log(jason);

// //jason.strName = 234234234;
// console.log(jason);
// jason.name = "Steve";

// // console.log(jason.getName());

// Object.defineProperty(User.prototype, 'name',{
//     get: function(){
//         return this._name;
//     }
// });
// // //jason.setName(234234234); throw error
// // jason.setName("Bob");
// // console.log(jason.getName());

// function sayThis(){
//     //console.log(this);
// }

// //sayThis(); //use strict caused this to be undefined

// var person = {name: 'Person'};
// var person2 = {name: 'Person2'};
// person.sayThis = sayThis;
// person.sayThis.call(person2);


Object.defineProperty(Array.prototype, "last", {
    get: function(){
        //console.log(this);
        return this[this.length-1];
    },
    set: function(input){
        //if(typeof input !=='string') throw new Error['array input must be string']
        return this[this.length-1] = input;
    }
});

var thisArray = [1,2,3,4,5];

console.log(thisArray.last);
console.log(thisArray.last = 15);
console.log(thisArray);

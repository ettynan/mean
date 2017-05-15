var _ = {
   map: function(arr, timesThree) { 
       var hold2 = [];
       for(var i = 0; i < arr.length; i++) {
           hold2.push(arr[i]*3); // invoking the callback many times... delegation!
            }
    return hold2;
   },

   reduce: function(arr, combineFunction) { 
       var temp = 0;
       var temp2 = 0;
       for(var i = 0; i < arr.length; i++) {
           temp2 += combineFunction(temp, arr[i]);
       }
           return temp2; // invoking the callback many times... delegation!
   
   },

   find: function(arr, oddFunction) { 
       var hold3 = 'not found';
       for(var i = 0; i < arr.length; i++) {
           if (oddFunction(arr[i])){
           return (arr[i]); // invoking the callback many times... delegation!
            }
       }
   },
   filter: function(arr, numberFunction) { 
       var hold = [];
       for(var i = 0; i < arr.length; i++) {
           if (numberFunction(arr[i])){
           hold.push(arr[i]); // invoking the callback many times... delegation!
            }
       }
    return hold;
   },

    reject: function(arr, tripleFunction) { 
    var hold4 = [];
        for(var i = 0; i < arr.length; i++) {
            if (!(tripleFunction(arr[i]))){
            hold4.push(arr[i]); // invoking the callback many times... delegation!
            }
        }
            return hold4;
        }
    }

// you just created a library with 5 methods!
var timesThree = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(timesThree);

var sum = _.reduce([1, 2, 3, 4, 5], function(memo, num){ return memo + num; }, 0);
console.log(sum);

var odd = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 1; });
console.log(odd);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var triples = _.reject([1, 2, 3, 4, 5, 6, 7, 8, 9], function(num){ return num % 3 == 0; });
console.log(triples);
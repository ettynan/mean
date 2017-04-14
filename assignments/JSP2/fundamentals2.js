//Create a simple for loop that sums all the numbers between integers x and y inclusive. Have it console log the final sum. 
function total(x, y){
    var sum = 0;
    for (var i = x; i<=y; i++){
        sum += i;
    }
    console.log(sum);
}
total(1, 500);

var total = function(x, y){
    var sum = 0;
    for (var i = x; i<=y; i++){
        sum += i;
    }
   return sum;
}
console.log(total(1,500));

// //Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it 
function arrayMin(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i]<min){
            min = arr[i]; 
        }
    }console.log(min);
}
arrayMin([1,5,90,25,-3,0]);

var arrayMin = function(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i]<min){
            min = arr[i]; 
        }
    }
    return min;
}
console.log(arrayMin([1,5,90,25,-3,0]));
// //Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
function arrayAvg(arr){
    var avg = arr[0];
    var sum = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum += i;
    }
    avg = sum/arr.length;
    console.log(avg);
}
arrayAvg([1, 5, 90, 25, -3, 0]);

var arrayAvg = function(arr){
    var avg = arr[0];
    var sum = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum += i;
    }
    avg = sum/arr.length;
    return avg;
}
console.log(arrayAvg([1, 5, 90, 25, -3, 0]));

var object = {
    total: function (x, y){
        var sum = 0;
        for (var i = x; i<=y; i++){
            sum += i;
        }
        return sum;
    },

    arrayMin:  function(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i]<min){
            min = arr[i]; 
        }
    }
    return min;
    },

    arrayAvg: function(arr){
    var avg = arr[0];
    var sum = arr[0];
    for (var i = 0; i < arr.length; i++){
        sum += i;
    }
    avg = sum/arr.length;
    return avg;
    }
}
console.log(object.total(1, 500));
console.log(object.arrayMin([1, 5, 90, 25, -3, 0]));
console.log(object.arrayAvg([1, 5, 90, 25, -3, 0]));

var person = {
    name: 'ET',
    distance_traveled: '0',
    say_name:function(name){
        console.log(person.name);
    },
    say_something: function(phrase){
        console.log(`${person.name} says: ${phrase}`);
    },
    walk: function(){
        console.log(`${person.name} is walking!`);
        person.distance_traveled += 3;
        return person;
    },
    run: function(){
        console.log(`${person.name} is running!`);
        person.distance_traveled += 10;
        return person;
    },
    crawl: function(){
        console.log(`${person.name} is crawling!`);
        person.distance_traveled += 1;
        return person;
    }
}
person.say_name();
person.say_something("is cool");
person.walk();
person.run();
person.crawl();

// var person = {
//     name: 'ET',
//     distance_traveled: '0',
//     say_name:function(name){
//         alert(person.name);
//     },
//     say_something: function(phrase){
//         console.log(`${person.name} says: ${phrase}`);
//     },
//     walk: function(){
//         console.log(`${person.name} is walking!`);
//         person.distance_traveled += 3;
//         return person;
//     },
//     run: function(){
//         console.log(`${person.name} is running!`);
//         person.distance_traveled += 10;
//         return person;
//     },
//     crawl: function(){
//         console.log(`${person.name} is crawling!`);
// //         // alert(`${person.name} is crawling!`);
//         person.distance_traveled += 1;
//         return person;
//     }
// }
// person.say_name();
// person.say_something(" says I am cool");
// person.walk();
// person.run();
// person.crawl();

function ninjaConstructor(name, cohort){
    var ninja = {};
    var belts = ["yellow", "red", "blue", "black"];
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLevel = 0;
    ninja.levelUp = function(){
        if (ninja.beltLevel < 3){
            ninja.beltLevel += 1;
            ninja.beltLevel = belts[ninja.beltLevel];
        }
        return ninja;
    }
    ninja.belt = belts[ninja.beltLevel];
    return ninja;
}
var joe = ninjaConstructor("Joe", "January");
console.log(joe);
joe.levelUp().levelUp();
console.log(joe.beltLevel);
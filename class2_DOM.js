//today moving into objects
//define a function that takes a list of items

//person factory
function personMaker(name, items){ //items=array - we are creating person with this function
    //make object within this function
    //dot notation for when know 
    var person = {};
    person.name = name; //dot notation
    person['items']=items;//

    person.take = take;

    function take(item, victim){ //closure pattern function within function
        console.log(person);
        //var i - hoisted to top of the scope for forloop
        //check that items is an array
        //victim variable needs to have items on item
        //console.log(Array.isArray(victim.items)); //preferred method to test if array
        // console.log(victim.items instanceof Array); //shows true as in is an ararau
        if(!victim || !Array.isArray(victim.items)){
            throw Error('No victim items');    //Error is a class so it has methods, attributes, invoked  by function
        }
        for(let i=0; i<victim.items.length; i++){ //let is block scoped, so only within this forloop
            if(item === victim.items[i]){
                //start splice at i, and it only takes off 1
                person.items.push(victim.items[i]);//add to theif before splic off or will lose it
                victim.items.splice(i,1); //splice is a method of Array, it will be destructive to the array upon which it is called
                return true;
            }
        }
        return false;
    }
    return person;
}
//const protects reassignment of variable name
const jason = personMaker('Jason',['wallet', 'gum', 'cash']);
const keith = personMaker('Keith', ['5 dollars', 'keys', 'orca pass']);

jason.name = 'Brian'; //this will work and the array can still be manipulated
// jason = 'wet'
// jason.items = 'items'; //will run, but not loop through the array
let item = 'wallet';
keith.take(item, jason);

const backpack = {
    color: 'red',
    items:['compass', 'map', 'rope']
};

keith.take('compass', backpack);

// if (take('wallet', jason)){
//     keith.items.push(item);
// }
console.log(jason);
console.log(keith);

// function f() {
//     console.log()
// }
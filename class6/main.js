//js is single threaded
//thingsFromDatabase = Things();

//when do we reach this code?

//console.log(thingsFromDatabase);

function getThingsFromDatabase(query, callback){
    //does this return immediately?
    setTimeout(function(){//throws this into a queue until the 3 seconds has passed, so data is undefined until time has passed
        var data = 'this is data from the database';
        console.log('before', data);
        callback(data);
        //return data;//there is nothing waiting for this information
    }, 3000)
};
function otherFunction(data){
    console.log(data);
}
//annonymous functions
//nameless();//can't call the anonymous function even though it has a name
getThingsFromDatabase('things we want from database', function nameless(data){
    console.log('we are here');
    console.log(data, 'the stuff');
    otherFunction(data)
;});
//console.log('after', listener);
//avoid global variables

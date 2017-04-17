function VehicleConstructor(name,numberWheels,numberPassengers,speed){    
    //protects against accidentally not having keyword 'new' before constructor
    if(!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name,numberWheels,numberPassengers,speed)
    }
    var self = this;
    //private variables
    var distance_traveled = 0;
    
    //private methods
    function updateDistanceTraveled(speed){
        distance_traveled += self.speed;
        // console.log(distance_traveled);
    }
    
    // public properties
    this._name = name || "feet";
    this.numberWheels = numberWheels || 1;
    this.numberPassengers = numberPassengers || 0;
    this.speed = speed || 0;

    //public methods
    this.makeNoise = function(noise){
       var noise = noise || "honk honk!";
        console.log(noise);
    };
    this.move = function(){
        updateDistanceTraveled();
        this.makeNoise();
    };
    this.checkMiles = function(){
        return distance_traveled;
    };
}
var Car = new VehicleConstructor("Car", 4, 5, 50);
console.log(Car.checkMiles());
Car.move();
console.log(Car.checkMiles());

// var Bike = new VehicleConstructor("Bike", 2, 1);
// // Bike.makeNoise = function(){
// //     console.log("ring ring!");
// // }
// Bike.makeNoise("ring ring!");
// // console.log(Bike);

// var Sedan = new VehicleConstructor("Sedan", 4, 5);
// Sedan.makeNoise = function(){
//     console.log("honk honk!");
// }
// Sedan.makeNoise();

// var Bus = new VehicleConstructor("Bus", 6, 1);
// Bus.passengersAdd = function(numberPassengers){
//     Bus.numberPassengers += numberPassengers;
// }
// console.log(Bus.numberPassengers);
// Bus.passengersAdd(15);
// console.log(Bus.numberPassengers);

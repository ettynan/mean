function VehicleConstructor(name,numberWheels,numberPassengers){
    // if you are returning an object, set it as the last private variable
    var ourVehicle = {};
    
    // public properties
    ourVehicle._name = name;
    ourVehicle.numberWheels = numberWheels;
    ourVehicle.numberPassengers = numberPassengers;
    
   //methods
    ourVehicle.makeNoise = function(noise){
       var noise = noise;
        console.log(noise);
    }

    return ourVehicle;
}

var Bike = VehicleConstructor("Bike", 2, 1);
// Bike.makeNoise = function(){
//     console.log("ring ring!");
// }
Bike.makeNoise("ring ring!");
// console.log(Bike);

var Sedan = VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise = function(){
    console.log("honk honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 6, 1);
Bus.passengersAdd = function(numberPassengers){
    Bus.numberPassengers += numberPassengers;
}
console.log(Bus.numberPassengers);
Bus.passengersAdd(15);
console.log(Bus.numberPassengers);

function VehicleConstructor(name,numberWheels,numberPassengers,speed){    
    //protects against accidentally not having keyword 'new' before constructor
    if(!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name,numberWheels,numberPassengers,speed)
    }
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.distance_traveled = 0;
    this.name = name || "feet";
    this.numberWheels = numberWheels || 1;
    this.numberPassengers = numberPassengers || 0;
    this.speed = speed || 0;
    this.vin = createVin();

    function createVin(){
        var vin = '';
        for(var i =0; i<17; i++){
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }
}

VehicleConstructor.prototype.makeNoise = function(noise){
       var noise = noise || "honk honk!";
        console.log(noise);
        return this;
    };

VehicleConstructor.prototype.move = function(){
        this.updateDistanceTraveled();
        this.makeNoise();
        return this;
    };

VehicleConstructor.prototype.checkMiles = function(){
        console.log(this.distance_traveled);
        return this;
    };

VehicleConstructor.prototype.updateDistanceTraveled = function(){
        this.distance_traveled += this.speed;
        console.log(this.distance_traveled);
        return this;
    };

var car = new VehicleConstructor("car", 4, 4, 80);


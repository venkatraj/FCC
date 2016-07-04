/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/make-object-properties-private
 */

var Car = function() {
    // this is a private variable
    var speed = 10;

    // these are public methods
    this.accelerate = function(change) {
        speed += change;
    };

    this.decelerate = function() {
        speed -= 5;
    };

    this.getSpeed = function() {
        return speed;
    };
};

var Bike = function() {

    // Only change code below this line.
    var gear = 4;

    this.getGear = function() {
        return gear;
    };

    this.setGear = function(changeGear) {
        gear = changeGear;
    };

};

var myCar = new Car();

var myBike = new Bike();

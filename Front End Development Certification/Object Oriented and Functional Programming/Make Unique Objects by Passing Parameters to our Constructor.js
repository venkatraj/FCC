/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/make-unique-objects-by-passing-parameters-to-our-constructor
 */

var Car = function(wheels, seats, engines) {
    //Change this constructor
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};

//Try it out here
var myCar = new Car(6,8,2);
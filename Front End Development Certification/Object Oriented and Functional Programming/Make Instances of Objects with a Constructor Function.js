/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/make-instances-of-objects-with-a-constructor-function
 */

var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 1;
};

// Only change code below this line.

var myCar = new Car();
myCar.nickname = "Maruti";

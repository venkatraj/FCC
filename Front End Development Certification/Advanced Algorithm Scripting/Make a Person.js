/**
 * Created by venkat on 5/5/17.
 */
var Person = function(firstAndLast) {
    Person.prototype.first = firstAndLast.split(' ')[0];
    Person.prototype.last = firstAndLast.split(' ')[1];


    this.getFirstName = function() {
        return Person.prototype.first;
    };

    this.getLastName = function() {
        return Person.prototype.last;
    };

    this.getFullName = function() {
        return Person.prototype.first + ' ' + Person.prototype.last;
    };

    this.setFirstName = function(first) {
        Person.prototype.first = first;
    };

    this.setLastName = function(last) {
        Person.prototype.last = last;
    };

    this.setFullName = function(firstAndLast) {
        first = firstAndLast.split(' ')[0];
        last = firstAndLast.split(' ')[1];
    };
};

Person.prototype.first = '';
Person.prototype.last = '';

var bob = new Person('Bob Ross');
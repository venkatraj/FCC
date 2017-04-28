/**
 * Created by venkat on 13/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/roman-numeral-converter
 */

function convertToRoman(num) {
    var numerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var times = 0, result = '';
    numerals.forEach(function(element,index) {
        times = parseInt(num/element);
        if(times > 0) {
            num = num%element;
            result += Array(times+1).join(roman[index]);
        }
    });
    return result;
}

convertToRoman(2);
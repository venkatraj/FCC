/**
 * Created by venkat on 15/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/binary-agents
 *
 */

function binaryAgent(str) {
    var chars = str.split(' ');
    chars = chars.map(function(val) {
        return parseInt(val,2);
    });
    return String.fromCharCode.apply(null,chars);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

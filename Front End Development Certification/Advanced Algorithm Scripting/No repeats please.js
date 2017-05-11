/**
 * Created by venkat on 4/5/17.
 */
function permAlone(str) {
    var result = [];
    var permArr = [], usedChars = [];
    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    }
    result = permute(str.split(''));
    return result.filter(function(val){
        return ! val.join('').match(/(.)\1+/g);
    }).length;
}

permAlone('aab');
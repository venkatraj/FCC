/**
 * Created by venkat on 13/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/dna-pairing
 */

function pairElement(str) {
    var result = [];
    str = str.split('');
    str.forEach(function(val){
        switch(val) {
            case 'A':
                result.push(['A','T']);
                break;
            case 'C':
                result.push(['C','G']);
                break;
            case 'G':
                result.push(['G','C']);
                break;
            case 'T':
                result.push(['T','A']);
                break;
        }
    });
    return result;
}
/*
 * May be better one?
 */
/*
function pairElement(str) {
    var pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    var result = [], pairChar;
    str = str.split('');
    str.forEach(function(ele){
        result.push([ele, pairs[ele]])
    });

    return result;
}
*/

pairElement("GCG");

/**
 * Created by venkat on 14/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/convert-html-entities
 */

function convertHTML(str) {
    // &colon;&rpar;
    var chars = ['&','<','>','"',"'"];
    var entities = ['&amp;','&lt;','&gt;','&quot;','&apos;'];
    var pattern = /[&<>"']/g;

    str = str.replace(pattern, function(match) {
        return entities[chars.indexOf(match)];
    });

    return str;
}

convertHTML("Dolce & Gabbana");
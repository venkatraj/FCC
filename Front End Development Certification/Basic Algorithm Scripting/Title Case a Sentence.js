/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/title-case-a-sentence
 */

function titleCase(str) {
    var words = str.split(' ');
    words = words.map(function(item){
        item = item.toLowerCase();
        return item[0].toUpperCase() + item.substr(1);
    });
    return words.join(' ');
}

titleCase("I'm a little tea pot");
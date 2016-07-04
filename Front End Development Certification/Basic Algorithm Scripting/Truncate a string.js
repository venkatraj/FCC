/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/truncate-a-string
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(num > 3) {
        num -= 3;
    }
    if(str.length <= num+3 && num > 3) {
        return str;
    }
    return str.slice(0,num)+'...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
/**
 * Created by venkat on 4/5/17.
 */
function changeCID(cid) {
    var result = [];
    result.push( Math.ceil( cid[8][1] / 100 ) );
    result.push( Math.ceil( cid[7][1] / 20 ) );
    result.push( Math.ceil( cid[6][1] / 10 ) );
    result.push( Math.ceil( cid[5][1] / 5 ) );
    result.push( Math.ceil( cid[4][1] / 1 ) );
    result.push( Math.ceil( cid[3][1] /.25 ) );
    result.push( Math.ceil( cid[2][1] /.10 ) );
    result.push( Math.ceil( cid[1][1] /.05 ) );
    result.push( Math.ceil( cid[0][1] /.01 ) );
    return result;
}


function checkCashRegister(price, cash, cid) {
    var change = [];
// Here is your change, ma'am.
    var denominations = [100,20,10,5,1,0.25,0.1,0.05,0.01];
    var diff = cash - price;
    var times = 1;
    cid = changeCID(cid);
    console.log(cid);

    function isAvailable(val, index, times) {
        if(cid[index] * val >= val * times) {
            return true;
        } else {
            return false;
        }
    }

    function total(arr) {
        var sum = 0;
        sum += arr[0] * 100;
        sum += arr[1] * 20;
        sum += arr[2] * 10;
        sum += arr[3] * 5;
        sum += arr[4] * 1;
        sum += arr[5] * 0.25;
        sum += arr[6] * 0.1;
        sum += arr[7] * 0.05;
        sum += arr[8] * 0.01;
        return sum;
    }

    function convert() {
        var result = [];
        change.forEach(function(val, index){
            if(val === 0) {
                return;
            }
            switch(index) {
                case 0:
                    result.push(["ONE HUNDRED", val * 100]);
                    break;
                case 1:
                    result.push(["TWENTY", val * 20]);
                    break;
                case 2:
                    result.push(["TEN", val * 10]);
                    break;
                case 3:
                    result.push(["FIVE", val * 5]);
                    break;
                case 4:
                    result.push(["ONE", val * 1]);
                    break;
                case 5:
                    result.push(["QUARTER", val * 0.25]);
                    break;
                case 6:
                    result.push(["DIME", val * 0.1]);
                    break;
                case 7:
                    result.push(["NICKEL", val * 0.05]);
                    break;
                case 8:
                    result.push(["PENNY", val * 0.01]);
                    break;
            }
        });
        return result;
    }

    function status() {
        var totalChange, totalCash, diff;
        diff = cash - price;
        totalChange = total(change);
        totalCash = total(cid);

        console.log('Sum' + totalChange + ' and diff ' + diff);
        if(totalChange < diff ) {
            return 'Insufficient Funds';
        }
        console.log('totalChange' + totalChange + ' and totalCash ' + totalCash);
        if(totalChange < totalCash) {
            return convert();
        } else {
            return 'Closed';
        }

    }

    denominations.forEach(function(val, index){
        times = 1;
        diff = parseFloat(diff).toFixed(2);
        //console.log(diff);
        while(diff >= val * times && isAvailable(val, index, times)) {
            times++;
        }
        times--;
        change.push(times);
        //console.log(val + ' * ' +  times + ' = ' + val * times);
        diff -= val * times;
    });
    return status();

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

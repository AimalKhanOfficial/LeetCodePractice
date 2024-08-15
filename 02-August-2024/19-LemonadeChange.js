/**
 * @param {number[]} bills
 * @return {boolean}
 */
//https://leetcode.com/problems/lemonade-change/submissions/1356702442
var lemonadeChange = function (bills) {
    //$5, $10 and then $20
    let billsPaid = [0, 0, 0];
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            billsPaid[0] += 1;
        }
        else if (bills[i] === 10) {
            billsPaid[1] += 1;
        }
        else {
            billsPaid[2] += 1;
        }
        if (bills[i] > 5) {
            let changeNeeded = bills[i] - 5;
            while (changeNeeded > 0) {
                //console.log(i, '>> need change', changeNeeded, 'bill', billsPaid)
                if (billsPaid[2] > 0 && changeNeeded > 20) {
                    billsPaid[2] -= 1;
                    changeNeeded -= 20;
                } else if ((billsPaid[1] > 0 || billsPaid[0] > 0) && changeNeeded <= 20) {
                    if (billsPaid[1] > 0 && changeNeeded >= 10) {
                        billsPaid[1] -= 1;
                        changeNeeded -= 10;
                    } else if (billsPaid[0] > 0) {
                        billsPaid[0] -= 1;
                        changeNeeded -= 5;
                    }
                } else {
                    return false;
                }
                

                if (changeNeeded >= 5 && changeNeeded < 20) {
                    if (changeNeeded === 5 && billsPaid[0] === 0) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};

console.log('>>', lemonadeChange(bills = [5, 5, 5, 10, 5, 5, 10, 20, 20, 20])) //false
console.log('>>', lemonadeChange(bills = [5,5,5,10,20])) //true
console.log('>>', lemonadeChange(bills = [5, 5, 10, 10, 20])) //false
console.log('>>', lemonadeChange(bills = [10,10])) //false
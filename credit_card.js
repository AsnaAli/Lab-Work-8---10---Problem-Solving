const e = require('express');

const prompt = require('prompt-sync')();

const num = prompt('Card number: ');                //user input
let arr = num.split("");                            //string to array
console.log(arr);
let filtered = arr.filter((a, i) => i % 2 !== 1);       // odd indexes of an array
//console.log(filtered);
var unfiltered = filtered.map(function (element) {
    return element * 2;                               //multiply by 2
});
console.log(unfiltered);
var sum = unfiltered.reduce(function (x, y) {       // add together
    return x + y;
}, 0);
//console.log(sum);
const last = String(sum).slice(-1);                 //get last digit 
//console.log(last);
if (last == 0 && arr.length == 13 || last == 0 && arr.length == 15 || last == 0 && arr.length == 16) //accepts if cardno. length is 13,15,16 and last digit is 0
{
    const ab = arr.slice(0, 2);                      //get starting two digits

    if (ab[0] == 4  )                                    //if first digit is 4 
    {
        console.log("VISA");
    }
    if (ab[0] == 5 && ab[1] == 1 || ab[0] == 5 && ab[1] == 2 || ab[0] == 5 && ab[1] == 3 || ab[0] == 5 && ab[1] == 4 || ab[0] == 5 && ab[1] == 5)    //if strt two digits is 51/52/53/54/54
    {
        console.log("MASTERCARD");
    }
    if (ab[0] == 3 && ab[1] == 4 || ab[0] == 3 && ab[1] == 7)    //if strt two digits is 34/37
    {
        console.log("American Express");
    }
    console.log("Valid");

    
}
else console.log("Invalid ");


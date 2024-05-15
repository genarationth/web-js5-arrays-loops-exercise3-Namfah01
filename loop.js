// ### Exercise #3

// Write a JavaScript program to construct the following pattern, using a nested for loop.

// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

const numStar = 5;
for (let i = 1; i <= numStar;i++) {
    let star = '';

    for(let j = 1; j <= i; j++) {
        star += '* ';
    }

    console.log(star);
}

// ### Exercise #4

// Write while loops to do the following:

// ```
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

let xValue = 5;

while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}

//Print all the odd numbers between 1 - 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !==0) {
        console.log(i);
    }
}

// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
function brackets(n) {
    let i = 1;

    while (i <= n) {
        console.log(`[${i}]`);
        i++;
    }
}

brackets(9);


// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

function sumNumber(n) {
    let sum = 0
    let i = 1;

    while (i <= n) {
        sum += i;
        i++;
    }

    return sum;
}

console.log(sumNumber(10));






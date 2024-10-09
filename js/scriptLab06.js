/*
Validate Numeric Entries in Lab 6 - The Future Value Application (Extra Credit 5 points)

There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. 
The code resembled the outlined below.

investment = parseFloat (window.prompt ("Enter investment amount as xxxx.xx")) ;
rate = parseFloat (window.prompt ("Enter interest rate as xx.x") ); 
years = parseInt (window. prompt ("Enter number of years"), 10);

Your job in this part of the assignment is to validate those entries. 
Within investment, the number should be numeric. 
Within rate, the number should be numeric and between 0 and a realistic rate like 6%. 
For years, the number should be numeric and between 1 and 30.
*/

// GLOBAL VARIABLES
let futureValue
let investment
let rate 
let years

// COLLECT VALUES FROM THE USER
validate = false
do {
    investment = parseFloat(prompt('Enter investment amount (Ex: xxxx.xx)'))

    if (isNaN(investment)) {
        alert("Please enter a valid number.")
        validate = true
    } else {
        validate = false
    }
} while (validate)

validate = false
do {
    rate = parseFloat(prompt('Enter the interest rate (Ex: xx.x)'))

    if (isNaN(rate) || rate<0 || rate>6) {
        alert("Please enter a valid number between 0 and 6.")
        validate = true
    } else {
        validate = false
    }
} while (validate)

validate = false
do {
    years = parseInt(prompt('Enter the number of years that you want to invest for.'))

    if (isNaN(years) || years<0 || years>30) {
        alert("Please enter a valid number between 0 and 30.")
        validate = true
    } else {
        validate = false
    }
} while (validate) 

// CALCULATE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`) 
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`) 
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}<br>`) 
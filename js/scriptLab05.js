/*
Validate Repeat Entry in Lab 5 (Extra Credit 5 points)

There’s a line of code in lab 5 - The Calculate MPG Application that asks the user if they want to repeat their entry. 
The code resembled the outlined below.

again = window prompt ("Repeat entries? (y or n)", "y");

Your job in this part of the assignment is to validate that entry. 
If it’s anything other than “y” or “n”, 
the prompt should simply reappear until the user enters a valid entry.
*/

let miles; 
let gallons; 
let mpg; 
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven.'));
    gallons = parseFloat(prompt('Enter gallons your vehicle holds.'));
    
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both of your entries are invalid.');
    }
    
    do {
        again = prompt('Do you want to perform another calculation? (y/n)', 'y');
    } while (again !== 'y' && again !== 'n');

} while (again === 'y');

console.log('Application has terminated.');

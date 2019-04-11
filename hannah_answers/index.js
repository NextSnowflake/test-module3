//1.  

let myCity = `Berlin`;
//let myCity = `Los Angeles`;
//let myCity = `New York`;
let start1 = `Los`;
let start2 = `New`;
if ((myCity.substring(0, 3).toLowerCase() === start1.toLowerCase()) || (myCity.substring(0, 3).toLowerCase() === start2.toLowerCase())) {
    console.log(`The city name does start with ${start1} or ${start2}.`);
} else console.log(`The city name does not begin with ${start1} or ${start2}.`);

// 2. 

let i = 0;
let array1 = [5, 16, 50]
let sum1 = 0;
for (i = 0; i < array1.length; i++) {
    sum1 = sum1 + array1[i];
}
console.log(sum1);

// 3. 

let firstName = `Hannah`;
let lastName = `Klein`;
let wholeName = (`${lastName}, ${firstName}`);
console.log(wholeName);

// 4. 

/* let endNumber1 = 1000;
let divider = 100;
for (i = 0; i <= endNumber1; i++) {
    if (i % divider === 0) {
        console.log(true);
    } else console.log(false); 
} */

//or

let num1 = 200;
if (num1 % divider === 0) {
    console.log(true);
} else console.log(false); 



// 5. 

let array2 = [`clever`, `meek`, `heavy`, `nice`, `repeated`];
let ending = `ly`;
for (i = 0; i < array2.length; i++) {
    array2[i] = array2[i] + ending;
}
console.log(array2);

// 6. 

let endNumber2 = 20;
for (i = 1; i <= endNumber2; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`)
    } else console.log(`${i} is odd`);
}

//or

let num2 = 36;
if (num2 % 2 === 0) {
    console.log(`${num2} is even.`);
} else console.log(`${num2} is odd`);



// 7. 

let wholeRadius = 360;
let angles = [100, 170]
let sumOfAngles = 0;
let right_angle = 90;
for (i = 0; i < angles.length; i++) {
    sumOfAngles = sumOfAngles + angles[i];
}
if (wholeRadius - sumOfAngles > right_angle) {
    console.log(`The last Angle is obtuse.`);
} else if (wholeRadius - sumOfAngles < right_angle) {
    console.log(`The last angle is acute.`);
} else console.log(`The last angle is a right angle.`);
//I did it this way, because now you can use it with stuff that has more angles.



// 8. 


 let someNames = `hannah leon marcel`;
let array3 = someNames.split(` `);
let firstUpper = [];

for (i = 0; i < array3.length; i++) {
    firstUpper.push(array3[i][0].toUpperCase()+array3[i].slice(1));
}

someNames = firstUpper.join(` `)
console.log(someNames);


// 9. 
let mySentence = `I like Foxes very much. That is true.`
console.log(mySentence.split(` `).length)

// 10. 

let array4 = [5, 6, 3, 9, 10, 4];
for (i = 0; i < array4.length; i++) {
    array4[i] = array4[i] * array4.length;
}
console.log(array4);
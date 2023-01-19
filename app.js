/*
Author: Davis Cordeiro
Desc: JS Ex3
Date 1/19/2023
*/

let registration = new Date(2020,0,7,8,25);

console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);


console.log(`Day: ${registration.getDay()}`);

console.log(`Date: ${registration.getDate()}`);

console.log(`Hour: ${registration.getHours()}`);

console.log(`Minutes: ${registration.getMinutes()}`);

console.log(`Seconds: ${registration.getSeconds()}`);

let funkyDate = new Date(2023, 1, 31);

console.log(funkyDate);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let now = new Date();

console.log(now);

now.setFullYear(1999);
now.setMonth(7);
now.setDate(3);

console.log(now.toString());
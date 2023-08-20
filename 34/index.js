"use strict";
let firstNames = ["a", "b", "c", "d", "e"];
let lastNames = ["f", "g", "h"];
let fullNames = [];
for (let i = 0; i < firstNames.length; i++) {
    for (let v = 0; v < lastNames.length; v++) {
        fullNames.push(firstNames[i] + lastNames[v]);
    }
}
console.log(fullNames);

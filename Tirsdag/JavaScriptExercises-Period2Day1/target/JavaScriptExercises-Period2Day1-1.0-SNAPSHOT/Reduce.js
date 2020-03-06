var all= ["Lars", "Peter", "Jan", "Bo"];

//OPGAVE A
var commaSeparated = all.join(",");
var spaceSeparated = all.join(" ");
var hashtagSeparated = all.join("#");

//console.log(commaSeparated);
//console.log(spaceSeparated);
//console.log(hashtagSeparated);

//OPGAVE B
var numbers = [2, 3, 67, 33];

function add(total, number){
    return total + number;
}

//console.log(numbers.reduce(add));

//OPGAVE C

var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}];
 
 function ageReduce(total, currentValue, index, arr) {
    if (index === arr.length - 1) {
        return (total + currentValue.age) / arr.length;
    } else {
        return (total + currentValue.age);
    };
};
var ageing = members.reduce(ageReduce, 0);
console.log(ageing);
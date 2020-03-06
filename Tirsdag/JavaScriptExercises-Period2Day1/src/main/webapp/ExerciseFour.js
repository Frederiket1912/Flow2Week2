var numbers = [1, 3, 5, 10, 11];

//OPGAVE A

//det sidste tal i result arrayet bliver NaN fordi den prøver at adde 11 til et tal der ikke
//eksistere. Det kan måske løses med en if der tjekker om numbers[index+1] er et tal, og ellers
//laver det om til 0, men jeg kunne ikke lige finde ud af det.
//let result = numbers.map((x, index) => 
//if (isNaN(numbers[index+1])){
//    x
//}
//else {
//x + numbers[index+1]
//});
//
//let result = numbers.map((x, index) => x + numbers[index+1]);
//console.log(result);

//OPGAVE B

var names = ["Lars", "Peter", "Jan", "Bo"];

var namesToHTML = names.map(x => "<a href=\"\">" + x + "</a>");
namesToHTML.unshift("<nav>");
namesToHTML.push("</nav>");
namesToHTML = namesToHTML.join('');

//console.log(namesToHTML);

//OPGAVE C

var persons = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function personTableMaker(persons){ 
var personsToHTML = persons.map(x => "<tr><td>" + x.name + "</td><td>" + x.phone + "</td></tr>");
personsToHTML.unshift("<table id=\"persontable\" class=\"table\"><tr><th>Name</th><th>Phone</th></tr>");
personsToHTML.push("</table>");
return personsToHTML.join('');
}
//console.log(personsToHTML);

//OPGAVE D
//Se ExerciseFourTest.html for implementationen
const NAMES = document.querySelector("#names");
const PERSONS = document.querySelector("#persons");

NAMES.innerHTML = namesToHTML;
PERSONS.innerHTML = personTableMaker(persons);

//OPGAVE E
const FILTER = document.querySelector("#filter");

FILTER.onclick = function(){
    var filteredNames = persons.filter(function(person){
       return person.name.includes("a");
    });
    PERSONS.innerHTML = personTableMaker(filteredNames);
}; 

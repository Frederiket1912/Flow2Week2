var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function filter(names, letter) {
    var filteredNames = names.filter(function(name) {
       return name.includes(letter);
    });
    return filteredNames;
}

function myFilter(array, letter, callback){
    return callback(array, letter);
}

//console.log(myFilter(names, "a", filter));

function map(names){
    var reversedNames = new Array;
    var i = 0;
    for (i = 0; i < names.length; i++){
        reversedNames[i] = names[names.length-i-1];
    }
    return reversedNames;
}

function myMap(array, callback){
    return callback(array);
}

console.log(myMap(names, map));

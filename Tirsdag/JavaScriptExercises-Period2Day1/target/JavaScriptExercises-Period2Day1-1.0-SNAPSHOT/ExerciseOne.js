var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function filter(names, letter) {
    var filteredNames = names.filter(function(name) {
       return name.includes(letter);
    });
    return filteredNames;
}
        
var namesWithA = filter(names,"a");

//console.log(namesWithA);

function reverse(names){
    var reversedNames = new Array;
    var i;
    for (i = 0; i < names.length; i++){
        reversedNames[i] = names[names.length-i];
    }
    return reversedNames;
}

//metoden reverser rækkefølgen i names, men den gør det fem gange fordi den gør det en
//gang for hver element i names arrayet. Jeg kunne ikke lige finde ud af at rette det
//så den kun gjorde det en gang.
//var reversed = names.map(function (){
//    var reversedNames = new Array;
//    var i = 0;
//    for (i = 0; i < names.length; i++){
//        reversedNames[i] = names[names.length-i-1];
//    }
//    return reversedNames;
//});

let reversed = names.map(x => x.split("").reverse().join(""));

console.log(reversed);





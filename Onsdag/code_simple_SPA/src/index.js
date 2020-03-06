import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

var allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
const JOKETEXTFIELD = document.querySelector("#jokeid");
const JOKEBUTTON = document.querySelector("#jokebutton");
const JOKE = document.querySelector("#joke");
const NEWJOKEBUTTON = document.querySelector("#newjokebutton");
const NEWJOKETEXT = document.querySelector("#newjoke");
const FETCHJOKEBUTTON = document.querySelector("#fetchjokebutton");
const FETCHEDJOKE = document.querySelector("#fetchedjoke");

document.getElementById("jokes").innerHTML = allJokes.join("");

JOKEBUTTON.onclick = function(){
    var jokeid = JOKETEXTFIELD.value;
    JOKE.innerHTML = jokes.getJokeById(jokeid);
};

NEWJOKEBUTTON.onclick = function() {
    var newJoke = NEWJOKETEXT.value;
    jokes.addJoke(newJoke);
    allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
}



function getJoke(){
    let url = "https://studypoints.info/jokes/api/jokes/period/hour";
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                FETCHEDJOKE.innerHTML = data;
                
                /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
            });
}

FETCHJOKEBUTTON.addEventListener("clicked", getJoke);
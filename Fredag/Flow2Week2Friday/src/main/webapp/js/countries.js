//Constants for all DOM elements im manipulating
const CONTENT = document.querySelector("#content");
const MAP = document.querySelector("#svg2");

var lastCountryID = "dk";
function presentCountryData(data){
    return "<p>Country: " + data[0].name + "</p>" +
    "<p>Population: " + data[0].population + "</p>" +
    "<p>Area: " + data[0].area + "</p>" +
    "<p>Borders: " + data[0].borders.join(", ") + "</p>"    
}

function getCountryData(e){
    e = e || window.event;
    e = e.target || e.srcElement;
    //sets color of last country clicked to default
    document.querySelector("#" + lastCountryID +"").style.fill = "#c0c0c0";
    //sets color of clicked country to red
    document.querySelector("#"+ e.id + "").style.fill = "#FF0000";
    let url = "http://restcountries.eu/rest/v1/alpha?codes=" + e.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                CONTENT.innerHTML = presentCountryData(data);
                
                /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
            });
            lastCountryID = e.id;
}

MAP.addEventListener("click", getCountryData);



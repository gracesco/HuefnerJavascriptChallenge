// from data.js
var tableData = data;

// Use d3 to select the body of the text in the index file
var tbody = d3.select("tbody")

// Loop through the data and put in the rows to the body
tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        console.log(key, value)
        var cell = row.append("td").text(value);
    });
});

// Select the button and create function to click 
var button = d3.select("#filter-btn");

button.on("click", function(){
    // Select the element to be input
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    console.log(inputDate)
    // Filter Data
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    console.log(filteredData);

    // Select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
    tbody.html("");

    // Loop through filtered data to insert rows and cells for each object
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});
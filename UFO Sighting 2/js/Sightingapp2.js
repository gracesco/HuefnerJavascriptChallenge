// from data.js
var tableData = data;

// YOUR CODE HERE!
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

// Create a function to help filter data
function filterData(data, field, compare) {
    if(compare !== "") {
        return data.filter(function(ufo) {
            if (ufo[field] === compare) {
                return true;
            }
        });
    }
    return data;
}

// Create an event to make the button function
button.on("click", function(){
    
    var dateElement = d3.select("#datetime");
    var inputDate = dateElement.property("value");
    
    var cityElement = d3.select("#city");
    var inputCity = cityElement.property("value");

    var stateElement = d3.select("#state");
    var inputState = stateElement.property("value");

    var countryElement = d3.select("#country");
    var inputCountry = countryElement.property("value");

    var shapeElement = d3.select("#shape");
    var inputShape = shapeElement.property("value");

    // Create a variable for filtered data
    var filteredData = tableData;

    // Use filterData function to filter data for the search criterias
    filteredData = filterData(filteredData, 'datetime', inputDate);
    filteredData = filterData(filteredData, 'city', inputCity);
    filteredData = filterData(filteredData, 'state', inputState);
    filteredData = filterData(filteredData, 'country', inputCountry);
    filteredData = filterData(filteredData, 'shape', inputShape);

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
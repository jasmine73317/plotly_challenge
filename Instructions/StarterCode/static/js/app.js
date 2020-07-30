d3.json("https://jasmine73317.github.io/plotly-challenge/StarterCode/samples.json").then(function(data) {
    data.names.forEach(function(id) {
        var dropdown = d3.select("#selDataset");
        dropdown.append("option").text(id);
    });

    function init() {
        
function goTo(location){
    document.location.href = location;
}

var years = [0,1,2,3,4,5,6,7,8,9];
// For drawing the lines
var year = [86,114,106,106,107,111,133,221,783,2478];
var month = [282,350,411,502,635,809,947,1402,3700,5267];
var week = [168,170,178,190,203,276,408,547,675,734];
var data_values = [year, month, week];
var data_types = ['year', 'month', 'week'];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: year,
        label: "Year",
        borderColor: "#3e95cd",
      }
    ]
  }
});

var pills = ['pill1', 'pill2', 'pill3'];
function pillClick(num){
    pills.forEach(function(x){
        document.getElementById(x).className = "inactive";
    });
    document.getElementById(pills[num]).className = "active";
    removeData(myChart);
    addData(myChart, data_types[num], data_values[num]);
}

function addData(chart, label, data_p) {
    chart.data.labels.push(label);
    chart.data.datasets.push({
        data: data_p,
        label: label,
        borderColor: "#3e95cd",
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.pop();
    chart.update();
}
function goTo(location){
    document.location.href = location;
}

var years = [0,1,2,3,4,5,6,7,8,9];
// For drawing the lines
var year = [4,5,8,7,6,7,4,4,3, localStorage.getItem("drinks")];
var month = [6,8,7,5,7,4,5,6,4, localStorage.getItem("drinks")];
var week = [3,4,5,8,9,9,5,4,2, localStorage.getItem("drinks")];
var data_values = [year, month, week];
var data_types = ['year', 'month', 'week'];
var view_type = 2; // 0=>year, 1=>month, 2=>week
var cum;

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
  },
  options: {
    scales: {
       xAxes: [{
               ticks: {
                fontSize: 30
               }
              }],
        yAxes: [{
            ticks: {
             fontSize: 30
            }
           }]
            }, legend: {
                display: false,
                }
    
    }

});

var pills = ['pill1', 'pill2', 'pill3'];
var alerts = ['alert1', 'alert2', 'alert3'];
function pillClick(num){
    pills.forEach(function(x){
        document.getElementById(x).className = "inactive";
    });
    document.getElementById(pills[num]).className = "active";
    view_type = document.getElementById(pills[num]).value;

    alerts.forEach(function(x){
        document.getElementById(x).innerHTML = data_types[num];
    });

    removeData(myChart);
    addData(myChart, data_types[num], data_values[num]);
}

function addData(chart, label, data_p) {
    chart.data.datasets.push({
        data: data_p,
        label: label,
        borderColor: "#3e95cd",
    });
    chart.update();
}

function removeData(chart) {
    chart.data.datasets.pop();
    chart.update();
}

function updateCum(){
    cum = data_values[view_type].reduce(getSum);   
} 
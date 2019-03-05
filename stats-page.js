function goTo(location){
    document.location.href = location;
}

// x values
var week = [1,2,3,4,5,6,7];
var month = [1,4,7,10,13,16,19,22,25,28,31];
var year = [1,2,3,4,5,6,7,8,9,10,11,12];

// y values
var week_data = [3,0,0,0,0,2, 2]; //localStorage.getItem("drinks")];
var month_data = [10,2,1,11,0,1,7,3,0,1,8];
var year_data = [34,35,23,39,21,20,22,22,18,19,25,24];

var data_values = [year_data, month_data, week_data];
var data_types = [year, month, week];
var data_labels = ['year', 'month', 'week'];
var x_labels = ['month', 'day', 'day'];

var data_values = [year, month, week];
var data_types = ['year', 'month', 'week'];
var view_type = 2; // 0=>year, 1=>month, 2=>week
var cum;

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: week,
    datasets: [
      { 
        data: week_data,
        label: "Week",
        borderColor: "#3e95cd",
      }
    ]
  },
  options: {
    scales: {
       xAxes: [{ 
           scaleLabel: {
            display: true,
            labelString: 'week',
            fontSize: 35,
            },
               ticks: {
                fontSize: 30
               }
              }],
        yAxes: [{
            scaleLabel: {
            display: true,
            labelString: 'drinks',
            fontSize: 35,
          },
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
var panels = ['panel1', 'panel2'];
function pillClick(num){
    // update the active pill
    pills.forEach(function(x){
        document.getElementById(x).className = "inactive";
    });
    document.getElementById(pills[num]).className = "active";
    view_type = document.getElementById(pills[num]).value;

    removeData(myChart);
    addData(myChart, data_labels[num], data_values[num], data_types[num], x_labels[num]);
}

function addData(chart, label, data_y, data_x, x_label) {
    chart.data.labels = data_x;
    chart.options.scales.xAxes[0].scaleLabel.labelString = x_label;
    chart.data.datasets.push({
        data: data_y,
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
    cum = data_values[view_type].reduce(getSum, 0);
} 

function getSum(total, num) {
    return total + num;
}

function init(){
    updateCum();
}


init();
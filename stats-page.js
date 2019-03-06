function goTo(location){
    document.location.href = location;
}

// member
var drinks = 0;
var stored_drinks = localStorage.getItem("drinks");
if (stored_drinks != null && stored_drinks != "NaN" ){
    drinks = parseInt(localStorage.getItem("drinks"));
}

// x values
var week = [1,2,3,4,5,6,7];
var month = [1,4,7,10,13,16,19,22,25,28,31];
var year = [1,2,3,4,5,6,7,8,9,10,11,12];

// y values
var week_data = [3,0,0,0,0,6, drinks]; //localStorage.getItem("drinks")];
var month_data = [9,1,1,8,0,1,6,2,0,1,8];
var year_data = [34,35,23,39,21,20,22,22,18,19,25,24];

var data_values = [year_data, month_data, week_data];
var data_types = [year, month, week];
var data_labels = ['year', 'month', 'week'];
var x_labels = ['month', 'day of the month', 'day of the week'];

var view_type = 2; // 0=>year, 1=>month, 2=>week
var cum;
var avg;


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    showTooltips: false,
  type: 'line',
  data: {
    labels: week,
    datasets: [
      { 
        data: week_data,
        label: "day of the week",
        borderColor: "#3e95cd",
        pointHoverRadius: 20,
        pointHitRadius: 40,
        pointRadius: 15,
        pointBorderColor: "blue"
      }
    ]
  },
  options: {
    scales: {
       xAxes: [{ 
           scaleLabel: {
            display: true,
            labelString: 'day of the week',
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
            }, 
            legend: {
                    display: false,
                    },
            onClick: pointClicked,
            tooltips: {
                enabled: false
            }
            }

});

function pointClicked(ctx, eventarr){
    var index = eventarr[0]._index;
    var date_string = getDate(index);
    var drinks = data_values[view_type][index];
    document.getElementById('modal-drink-text').innerHTML = "You had " + drinks + " drinks " + date_string;
    $('#drinkModal').modal('show'); 
}

var months = ["April '18", "May '18", "June '18", "July '18", "August '18", "September '18", "October '18", "November '18", "December '18", "January '19", "February '19", "March '19"];
function getDate(index){
    var days_ago = 0;
    var len = data_values[view_type].length - 1;
    var prefix = "";
    if (view_type == 0){
        days_ago = 31 * (len - index);
        prefix = "in the month of";
    } else if (view_type == 1){
        days_ago = 3 * (len - index);
        prefix = "on or around the day of";
    } else {
        days_ago = (len - index);
        prefix = "on the day of";
    }
    var d = new Date();
    d.setDate(d.getDate() - days_ago);
    str = d.toLocaleString().split(",")[0];

    if (view_type == 0){
        str = months[index];
    }

    return prefix + " " + str;
}

var pills = ['pill1', 'pill2', 'pill3'];
function pillClick(num){
    // update the active pill
    pills.forEach(function(x){
        document.getElementById(x).className = "inactive";
    });
    document.getElementById(pills[num]).className = "active";

    // update chart
    addData(myChart, data_labels[num], data_values[num], data_types[num], x_labels[num]);
    view_type = document.getElementById(pills[num]).value;

    // update cum and avg
    init();
}

function addData(chart, label, data_y, data_x, x_label) {
    chart.data.labels = data_x;
    chart.options.scales.xAxes[0].scaleLabel.labelString = x_label;
    console.log(chart.data.datasets)
    chart.data.datasets[0].data = data_y;
    chart.data.datasets[0].label = label;
    chart.update();
}

function updateCum(){
    cum = data_values[view_type].reduce(getSum, 0);;
} 

function getSum(total, num) {
    return total + num;
}

function updateAvg(){
    var end = data_types[view_type].length - 1;
    avg = cum/(data_types[view_type][end]);
    avg = parseInt(avg*100)/100;
}

function init(){
    updateCum();
    updateAvg();
    document.getElementById('panel1').innerHTML = avg;
    document.getElementById('panel2').innerHTML = cum;
}

init();
$('#myModal').modal({ show: false})
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

  var data = google.visualization.arrayToDataTable([
   ["language",  "users"],
   ["JavaScript",  1770],
   ["Java",        570],
   ["Objective-C", 511],
   ["Python",      483],
   ["Ruby",        469],
   ["C",           217],
   ["C++",         201],
   ["PHP",         191],
   ["Swift",       142],
   ["C#",          79 ]
  ]);

  var options = {
    title: 'Google Charts'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}


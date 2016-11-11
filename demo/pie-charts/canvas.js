// dataset
var dataPlot = [
   { label: "JavaScript",  y: 1770 },
   { label: "Java",        y: 570 },
   { label: "Objective-C", y: 511 },
   { label: "Python",      y: 483 },
   { label: "Ruby",        y: 469 },
   { label: "C",           y: 217 },
   { label: "C++",         y: 201 },
   { label: "PHP",         y: 191 },
   { label: "Swift",       y: 142 },
   { label: "C#",          y: 79 }
];

// init params
var ChartValue = function() {
   this.title = 'CanvasJS';
   this.type = 'pie';
   this.theme = 'theme1';
   this.width = 400;
   this.height = 300;
}

// GUI Controller
var value = new ChartValue();

// change theme
function change_theme(obj) {
   var index = obj.selectedIndex;
   value.theme = obj.options[index].value;
   setChart();
}

// create chart
function setChart() {
   var chart = new CanvasJS.Chart("canvasJS", {
      title: {
         text: value.title
      },
      theme: value.theme,
      width: value.width,
      height: value.height,
      data: [{
         type: value.type,
         dataPoints: dataPlot
      }]
   });
   chart.render();
}

// show chart
setChart();
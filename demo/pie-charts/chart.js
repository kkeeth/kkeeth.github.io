// dataset
// dataset
var data = {
   labels: [
      "JavaScript",
      "Java",
      "Objective-C",
      "Python",
      "Ruby",
      "C",
      "C++",
      "PHP",
      "Swift",
      "C#"
   ],
   datasets: [
      {
         data: [
            1770,
            570,
            511,
            483,
            469,
            217,
            201,
            191,
            142,
            79
         ],
         hoverBorderWidth: 4,
         backgroundColor: [
            "#1F77B4",
            "#FF7F0E",
            "#2CA02C",
            "#D62728",
            "#9467BD",
            "#8C564B",
            "#E377C2",
            "#7F7F7F",
            "#BCBD22",
            "#17BECF"
         ]
       }]
};

// options
var options = {
  title: {
    display: true,
    text: 'ChartJS'
  }
};

// settings about canvas
var ctx = document.getElementById("chart_dest");

// create instanse
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
});
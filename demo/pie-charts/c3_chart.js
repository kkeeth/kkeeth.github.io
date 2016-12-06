var chart = c3.generate({
   bindto: '#c3_dest',
   data: {
      columns: [
         ['JavaScript',  1770],
         ['Java',        570],
         ['Objective-C', 511],
         ['Python',      483],
         ['Ruby',        469],
         ['C',           217],
         ['C++',         201],
         ['PHP',         191],
         ['Swift',       142],
         ['C#',          79 ]
      ],
      type : 'pie'
   },
   legend: {
      position: 'right'
   },
   tooltip: {
      format: {
         title: function (d) { return d; }
      }
   }
});



// Load the the Raphael library
Qva.LoadScript("http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js", function() {

  // Load the Raphael graphical library
  Qva.LoadScript("http://g.raphaeljs.com/g.raphael.js", function() {

    // Load the Raphael pie chart library
    Qva.LoadScript("http://g.raphaeljs.com/g.pie.js", function() {

      Qva.AddExtension('tekacademy/raphael-pie-chart', function() {

        var _this = this;
        var vw = _this.GetWidth();
        var vh = _this.GetHeight();
        var vx = Math.floor((vw-150)/2);
        var vy = Math.floor(vh/2);
        var vr = Math.floor(0.95 * (vx > vy ? vy : vx));

        _this.Element.innerHTML = '<div id="canvas' 
           + '" style="width:' + vw + 'px;'
           + 'height:' + vh + 'px;'
           + 'left: 0; position: absolute;'
           + 'top: 0;z-index:999;"></div>';

        var paper = Raphael("canvas", vw, vh);

        var dataArray = [];
        var legendValues = [];
        var colorList = ["#8DAACB",
                         "#FC7362",
                         "#BBD854",
                         "#FFD92F"];

        // Cycle Through the data
        for (var i = 0; i < _this.Data.Rows.length; i++) {
          // get the row
          var row = _this.Data.Rows [i];

          dataArray.push(parseInt(row[1].text, 10));
          legendValues.push('%%%.% ' + row[0].text);
        }

        paper.piechart(vx, vy, vr, dataArray,
           { legend: legendValues,
             colors: colorList,
             legendothers: "%%%.% Others",
             maxSlices: 3
           });

      },true);
    } );
  } );
} );

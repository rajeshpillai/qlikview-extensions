
Qva.AddExtension('tekacademy/raphael-pie-chart-local', function() {

  var jsFiles = [];
  var template_path = Qva.Remote + "?public=only&name=Extensions/d3-force-directed/lib/js/";
  var base_path = "Extensions/tekacademy/raphael-pie-chart-local/lib/js/";
  jsFiles.push(base_path +  "raphael.min.js");
  jsFiles.push(base_path +  "g.raphael.js");
  jsFiles.push(base_path +  "g.pie.js");
  
  var _this = this;

  Qv.LoadExtensionScripts(jsFiles, function () {
     drawChart();
  });     

  function drawChart(){
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
    }

},true);

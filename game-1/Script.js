Qva.AddExtension('tekacademy/game-1', function() {
  
  var _this = this;

  drawChart();
 
  function drawChart(){

      var w = _this.GetWidth();
      var h = _this.GetHeight();
  
      
      var canvas = document.getElementById("canvas1");

      canvas = canvas || document.createElement("canvas");

      canvas.setAttribute("id","canvas1");

      _this.Element.appendChild(canvas);

      canvas.width = w;
      canvas.height = h;

      var ctx = canvas.getContext('2d');

      ctx.clearRect(0,0,w,h);
      var text = "";


      ctx.font="20px Georgia";
      ctx.fillStyle="red";
      ctx.fillText("Total Rows: " + _this.Data.Rows.length.toString(),10,20);


      var y = 50;

      for (var i = 0; i < _this.Data.Rows.length; i++) { 
        // get the row 
        var row = _this.Data.Rows[i];

        text = row[0].text + "," + row[1].text + "," + row[2].text;

        ctx.font="20px Sans Serif";
        ctx.fillStyle="red";
        ctx.fillText(text,10,y);
        y += 20;
      }
    }

},true);

Qva.AddExtension('tekacademy/game-1', function() {
  
  var _this = this;

  drawChart();
 
  function drawChart(){
      var w = _this.GetWidth();
      var h = _this.GetHeight();
  
      var canvas = document.createElement("canvas");
      _this.Element.appendChild(canvas);

      canvas.width = w;
      canvas.height = h;

      var ctx = canvas.getContext('2d');

      var text = "";

      for (var i = 0; i < _this.Data.Rows.length; i++) { 
        // get the row 
        var row = _this.Data.Rows[i];

        text += row[0].text + "," + row[1].text + "," + row[2].text;
      }

      ctx.fillStyle="yellow";
      ctx.fillRect(0,0,w,h);
      ctx.font="20px Georgia";
      ctx.fillStyle="red";
      ctx.fillText(text,10,50);

    }

},true);

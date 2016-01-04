Qv.AddExtension("tekacademy/03-example/Stylized-Html-Table", function(){
  // Inside the extension "this" points to the extension object

  var self = this;

  var base_path = "Extensions/tekacademy/03-example/Stylized-Html-Table/";

  alert(JSON.stringify(self.Data.Rows));

  Qva.LoadCSS(base_path + "style.css");

  var html = drawTable(self.Data.Rows);
  self.Element.innerHTML = html;
});

function drawTable(rows) {
    var html = "<br><table class='e-table'>";

    // Cycle Through the data
    for (var i = 0; i < rows.length; i++) {
      // get the row
      var row = rows [i];
      // Generate html
      html += "<tr><td>" + row[0].text + "</td><td>" + row[1].text + "</td></tr>";
    }

    // Finalise the html
    html += "</table>";
    return html;
  }

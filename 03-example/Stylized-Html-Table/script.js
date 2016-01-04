Qv.AddExtension("tekacademy/03-example/Stylized-Html-Table", function(){
  // Inside the extension "this" points to the extension object

  var self = this;

  var root_url = Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only';

  var base_path = "Extensions/tekacademy/03-example/Stylized-Html-Table/";

  //alert(JSON.stringify(self.Data.Rows));

  //Qva.LoadCSS(base_path + "style.css");
  var fullCSS = root_url +  "&name=" + base_path + "style.css";
  //alert(fullCSS);
  Qva.LoadCSS(fullCSS);

  var html = drawTable(self, self.Data.Rows);
  self.Element.innerHTML = html;
});

function drawTable(self, rows) {
    var html = "<table class='e-table'>";

    var headstring = "<tr><th>{0}</th><th>{1}</th></tr>"

    var dimLabel = self.Layout.Text0.text;

    var exprLabel = self.Layout.Text1.text;

    html += headstring.format(dimLabel, exprLabel);

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

String.prototype.format = function () {
  // code from stackoverflow.com
  var args = arguments;
  return this.replace(/\{(\d+)\}/g,
    function (m, n) { return args[n]; });
};

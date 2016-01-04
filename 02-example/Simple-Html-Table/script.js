Qv.AddExtension("tekacademy/02-example/Simple-Html-Table", function(){
  // Inside the extension "this" points to the extension object
  var html = "<table border='1'>";

  //alert(JSON.stringify(this.Data.Rows));

  // Cycle Through the data
  for (var i = 0; i < this.Data.Rows.length; i++) {
    // get the row
    var row = this.Data.Rows [i];
    // Generate html
    html += "<tr><td>" + row[0].text + "</td><td>" + row[1].text + "</td></tr>";
  }

  // Finalise the html
  html += "</table>";

    // Set the HTML
  this.Element.innerHTML = html;
});

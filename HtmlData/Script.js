Qva.AddExtension('tekacademy/HtmlData', function() {
	// Create a variable to hold generated html 
     
    var html = "<table>";

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
},true);
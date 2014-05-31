Qva.AddExtension('tekacademy/HtmlDataUserEvents', function() {
    // Create a variable to hold generated html 
    var html = "<table>"; 
    // Local variable to hold the reference to QlikView 
    var _this = this;

    // function to handle users clicking on a row 
    window.ontekrowclick = function(rowIx) 
    { 
        _this.Data.SelectRow(rowIx); 
    }

    // Cycle Through the data 
    for (var i = 0; i < this.Data.Rows.length; i++) { 
        // get the row 
        var row = this.Data.Rows [i];

        // Generate html 
        html += "<tr><td onclick='ontekrowclick("+i+")'>" + row[0].text + "</td><td onclick='oncvlrowclick("+i+")'>" + row[1].text + "</td></tr>"; 
    }

    // Finalise the html 
    html += "</table>";

    // Set the HTML 
    this.Element.innerHTML = html;
},true);
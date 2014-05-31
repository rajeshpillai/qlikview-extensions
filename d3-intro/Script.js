Qva.AddExtension('tekacademy/d3-intro', function() {
    // Local variable to hold the reference to QlikView 
    var _this = this;
    _this.ExtSettings = {};
    _this.ExtSettings.ExtensionName = 'd3-intro';

    InitSettings();

    // ------------------------------------------------------------------
    // Initialize Settings
    // ------------------------------------------------------------------
    function InitSettings() {

        _this.ExtSettings.UniqueId = _this.Layout.ObjectId.replace("\\", "_");

         //Base Url for CSS Files
        _this.ExtSettings.LoadUrl = Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=';
        _this.ExtSettings.ContainerId = 'BulletChart_' + _this.ExtSettings.UniqueId;

    }

    var jsFiles = [];
    var template_path = Qva.Remote + "?public=only&name=Extensions/d3-intro/lib/js/";
    jsFiles.push( "Extensions/tekacademy/d3-intro/lib/js/d3.min.js");
    
    Qv.LoadExtensionScripts(jsFiles, function () {
        
    });            

    var dataArray = [];
    
    // Cycle Through the data 
    for (var i = 0; i < this.Data.Rows.length; i++) { 
        // get the row 
        var row = this.Data.Rows [i];
        dataArray.push(parseInt(row[1].text, 10));
    }

    var width=500, height=500;
    var svg=d3.select(this.Element).append("svg").attr("width",width).attr("height",height);
    
    var circles = svg.selectAll("circle")
        .data(dataArray)
        .enter().append("circle")
        .attr("cx", function(d, i) {
            return (i * 50) + 25;
           })
        .attr("cy", 20)
        .attr("r", function(d) {
            return d/100;
    });

   
},true);
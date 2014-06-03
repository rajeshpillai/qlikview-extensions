Qva.AddExtension('tekacademy/d3-force-directed', function() {
    // Local variable to hold the reference to QlikView 
    var _this = this;
    _this.ExtSettings = {};
    _this.ExtSettings.ExtensionName = 'd3-force-directed';

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
    var template_path = Qva.Remote + "?public=only&name=Extensions/d3-force-directed/lib/js/";
   
    jsFiles.push("Extensions/tekacademy/d3-force-directed/lib/js/d3.min.js");
    jsFiles.push("Extensions/tekacademy/d3-force-directed/lib/js/jsonp.js");
    jsFiles.push("Extensions/tekacademy/d3-force-directed/data/flare.js");

    var that = this;

    Qv.LoadExtensionScripts(jsFiles, function () {
       drawChart(data);
    });            

    function drawChart(data){
        var w = 500,
        h = 500,
        z = d3.scale.category20();
        
        var force = d3.layout.force()
            .size([w, h]);

        var svg = d3.select(that.Element).append("svg")
            .attr("width", w)
            .attr("height", h);

        var nodes = flatten(data),
        links = d3.layout.tree().links(nodes);
        
    
        force
          .nodes(nodes)
          .links(links)
          .start();

        var link = svg.selectAll("line")
          .data(links)
          .enter().insert("line")
          .style("stroke", "#999")
          .style("stroke-width", "1px");

        var node = svg.selectAll("circle.node")
          .data(nodes)
          .enter().append("circle")
          .attr("r", 4.5)
          .style("fill", function(d) { return z(d.parent && d.parent.name); })
          .style("stroke", "#000")
          .call(force.drag);

          force.on("tick", function(e) {
            link.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
          });
        
    }
     
    var dataURL = Qva.Remote + "?public=only&name=Extensions/tekacademy/d3-force-directed/flare.json";

    function flatten(root) { // <-A
      var nodes = [];
      function traverse(node, depth) {
        if (node.children) {
          node.children.forEach(function(child) {
            child.parent = node;
            traverse(child, depth + 1);
          });
        }
        node.depth = depth;
        nodes.push(node);
      }
      traverse(root, 1);
      return nodes;
    }

},true);
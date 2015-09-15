
Qva.AddExtension('tekacademy/spacebowling', function() {

  var jsFiles = [];
  var template_path = Qva.Remote + "?public=only&name=Extensions/d3-force-directed/lib/js/";
  var base_path = "Extensions/tekacademy/spacebowling/";
  jsFiles.push(base_path +  "game.js");
  
  _this = this;
  var GameObject = this;
  Qva.LoadCSS(base_path + "game.css");

 
  Qv.LoadExtensionScripts(jsFiles, function () {
     
  });     

  gameLoop();
  
},true);

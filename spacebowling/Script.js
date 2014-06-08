
Qva.AddExtension('tekacademy/spacebowling', function() {

  var jsFiles = [];
  var template_path = Qva.Remote + "?public=only&name=Extensions/d3-force-directed/lib/js/";
  var base_path = "Extensions/tekacademy/spacebowling/";
  jsFiles.push(base_path +  "game.js");
  
  var _this = this;
  var GameObject = this;
  Qva.LoadCSS(base_path + "game.css");

  gameLoop();

  Qv.LoadExtensionScripts(jsFiles, function () {
     //gameLoop();
  });     

  function gameLoop(){
      var w = _this.GetWidth();
      var h = _this.GetHeight();
      var canvas = document.getElementById("gameCanvas");
      canvas = canvas || document.createElement("canvas");

      canvas.setAttribute("id","gameCanvas");

      _this.Element.appendChild(canvas);

    var game = document.getElementById("game");
      game = game || document.createElement("div");
      game.setAttribute("id","game");
      _this.Element.appendChild(game);


      /*var gameUI = document.getElementById("gameUI");
      gameUI = gameUI || document.createElement("div");
      gameUI.setAttribute("id","gameUI");
      game.appendChild(gameUI);
      */

      $(game).append("div").attr("id","gameUI");


      var gameIntro = document.getElementById("gameIntro");
      gameIntro = gameIntro || document.createElement("div");
      gameIntro.setAttribute("id","gameIntro");
      game.appendChild(gameIntro);

     var gameStats = document.getElementById("gameStats");
      gameStats = gameStats || document.createElement("div");
      gameStats.setAttribute("id","gameStats");
      game.appendChild(gameStats);


    var gameComplete = document.getElementById("gameComplete");
      gameComplete = gameComplete || document.createElement("div");
      gameStats.setAttribute("id","gameComplete");
      game.appendChild(gameComplete);


    var gamePlay = document.getElementById("gamePlay");
      gamePlay = gamePlay || document.createElement("div");
      gamePlay.setAttribute("id","gamePlay");
      game.appendChild(gamePlay);

    $(game).append("a").attr("id","gamePlay").addClass("button").attr("href","");
    $(game).append("<a href='' id='gamePlay' class='button'>Play</a>");

    var gameReset = document.getElementById("gameReset");
      gameReset = gameReset || document.createElement("div");
      gameReset.setAttribute("id","gameReset");
      game.appendChild(gameReset);

   var gameRemaining = document.getElementById("gameRemaining");
      gameRemaining = gameRemaining || document.createElement("div");
      gameReset.setAttribute("id","gameRemaining");
      game.appendChild(gameRemaining);

  var gameScore = document.getElementById("gameScore");
      gameScore = gameScore || document.createElement("div");
      gameScore.setAttribute("id","gameScore");
      game.appendChild(gameScore);
      $(gameScore).addClass("gameScore");

      /*
        var ui = $("#gameUI");
        var uiIntro = $("#gameIntro");
        var uiStats = $("#gameStats");
        var uiComplete = $("#gameComplete");
        var uiPlay = $("#gamePlay");
        var uiReset = $(".gameReset");
        var uiRemaining = $("#gameRemaining");
        var uiScore = $(".gameScore");
      */

      canvas.width = 350;
      canvas.height = 600;
  }

},true);

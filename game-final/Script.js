var flag = false;
var canvas;
var ctx;

var ballX = 50;

Qva.AddExtension('tekacademy/game-final', function() {
  
  var _this = this;

  init();

  function init() {

    if (flag){
      return;
    }

    var gameLevel;
    var qvDoc = Qv.GetCurrentDocument();
    myInputBox = _this.GetQvObject("ibGameLevel", function(){
        gameLevel = this.GetVariable(0).text;
        flag = true;
        console.log(gameLevel);
        startGame (gameLevel);
    });
  }

  function startGame(level){
    flag = true;
    var w = _this.GetWidth();
    var h = _this.GetHeight();
    canvas = document.getElementById("canvas1");
    canvas = canvas || document.createElement("canvas");
    canvas.setAttribute("id","canvas1");

    _this.Element.appendChild(canvas);

    canvas.width = w;
    canvas.height = h;

    ctx = canvas.getContext('2d');
    setInterval(drawGame,1000);
  }

  function drawGame(){
    ballX += 10;

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(225,210,200,200);
    ctx.fillStyle = "red";
    ctx.fillRect(ballX, 100, 10, 10);

  }

});

(function() {
    var gamewidth = document.documentElement.clientWidth;
    var gameheight = document.documentElement.clientHeight;
    console.log(gamewidth);
    console.log(gameheight);
    var canvas = document.getElementById('gamewords');
    var ctx = canvas.getContext("2d");
    canvas.width = gamewidth;
    canvas.height = gameheight;
     draw();


    function draw(){
      ctx.fillStyle = "#fff";
      ctx.fillRect(50, 50, gamewidth-100, gameheight-100);
    }

}())

(function() {

    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;


    var gamewidth = document.documentElement.clientWidth;
    var gameheight = gamewidth / 1.7777;
    var Wstepsize = gamewidth / 10;
    console.log(gamewidth);
    console.log(gameheight);
    var canvas = document.getElementById('gamewords');
    var ctx = canvas.getContext("2d");

    var myRect = {
        x: 50,
        y: 0,
        speedx: 1,
        speedy: 1,
        width: 100,
        height: 100,
        color: "#c23a3a",
        go: function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }


    draw();

    var update = function(timestep) {
        myRect.x = myRect.x + (myRect.speedx * timestep * 500);
        myRect.y = myRect.y + (myRect.speedy * timestep * 500 / 2);

        // console.log(myRect.x);
        // console.log(myRect.y);
        if (myRect.x + myRect.width >= gamewidth) {
            myRect.speedx = -1
        }
         else if (myRect.x < 0) {
            myRect.speedx = 1
        }
        if (myRect.y + myRect.height >= gameheight){
            myRect.speedy = -1;
        } else if(myRect.y < 0){
          myRect.speedy = 1;
        }

    }



    function draw() {
        ctx.clearRect(0, 0, gamewidth, gameheight);
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, gamewidth, gameheight);
        ctx.fillStyle = "rgb(142, 27, 114)";
    }

    // window.addEventListener("resize", function () {
    //   gamewidth =document.documentElement.clientWidth;
    //   gameheight = gamewidth/1.7777;
    //   canvas.width = gamewidth;
    //   canvas.height = gameheight;
    //   draw();
    // })


    var lasttime = Date.now();
    // console.log(lasttime)
    function start() {
        gamewidth = document.documentElement.clientWidth;
        gameheight = gamewidth / 1.7777;
        canvas.width = gamewidth;
        canvas.height = gameheight;
        var now1 = Date.now();

        var dr = (now1 - lasttime) / 1000;
        // console.log(dr);

        draw();
        update(dr);
        myRect.go();
        lasttime = now1;
        window.requestAnimationFrame(start);
    }
    start();
}())

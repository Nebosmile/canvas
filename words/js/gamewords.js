var someRect;
(function() {

    class Rectangle {
        constructor(w, h, color) {
            this.width = w;
            this.height = h;
            this.color = color;
        }
        add() {
            return this.width + this.height;
        }
        setWidth(newWidth) {
            this.width = newWidth;
        }
    }

    class Square extends Rectangle {
        constructor(w, color) {
            super(w, w, color);
        }
        add() {
            console.log('I am a square!');
            return 2 * this.width;
        }
        getSquare() {
            return this.width * this.width;
        }
        setWidth(newWidth) {
            super.setWidth(newWidth);
            this.height = newWidth;
        }
    }


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
    canvas.width = gamewidth;
    canvas.height = gameheight;
    var canvasCoord = canvas.getBoundingClientRect();
    var mouse;
    var rectArr = [];

    var FirstrectWidth = 1 / 20 * gamewidth;

    //// третья версия

    class Firstrect {
        constructor(corX, corY, speedx, speedy) {
            this.now = date.now();
            this.x = corX;
            this.y = corY;
            this.mysizevalue = 1;
            this.width = this.mysizevalue * FirstrectWidth;
            this.height = this.width;
            this.color = "#000";
            this.sx = speedx;
            this.sy = speedy;

            if (mysizevalue == 0.8) {
                this.color = "#1a3725"
            } else if (mysizevalue == 0.6) {
                this.color = "#2a8736"
            } else if (mysizevalue == 0.4) {
                this.color = "#8e981c"
            } else if (mysizevalue == 0.2) {
                this.color = "#b3cc1a";
            }

        }
        draw() {
            var now1 = Date.now();
            var dr = (now1 - this.lasttime) / 1000;
            this.x = this.x + this.sx * dr * 100;
            this.y = this.y + this.sy * dr * 50;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            this.lasttime = now1;
            if (this.x + this.width >= gamewidth) {
                this.sx = -1 * this.sx;
            } else if (this.x < 0) {
                this.sx = -1 * this.sx;
            }
            if (this.y + this.height >= gameheight) {
                this.sy = -1 * this.sy;
            } else if (this.y < 0) {
                this.sy = -1 * this.sy;
            }
        }

    }

    function init() {

        var blackrect = new Firstrect

    }

    ///////////////////конец третей версии

    // // вторая версия
    // function Makerect(corX, corY, elemWidth, elemHeight, elemColor, speedx, speedy, time) {
    //     this.now1 = Date.now();
    //     this.x = corX;
    //     this.y = corY;
    //     this.width = elemWidth;
    //     this.height = elemHeight;
    //     this.color = elemColor;
    //     this.sx = speedx;
    //     this.sy = speedy;
    //     this.lasttime = time;
    //     var myself = this;
    //
    //     canvas.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         mouse = {
    //             x: e.pageX - canvasCoord.left,
    //             y: e.pageY - canvasCoord.top
    //         }
    //         if (myself.x < mouse.x && myself.x + myself.width > mouse.x && myself.y < mouse.y && myself.y + myself.height > mouse.y) {
    //             myself.sx = -1 * myself.sx;
    //             myself.sy = -1 * myself.sy;
    //
    //             var second = new Makerect(myself.x, myself.y,myself.width/2 , myself.height/2, "green", myself.sx*-1.2, myself.sy*-1.2, Date.now());
    //             rectArr.push(second);
    //             console.log(rectArr);
    //             second.draw();
    //         }
    //     })
    //
    // }
    //
    // Makerect.prototype.draw = function() {
    //
    //     var now1 = Date.now();
    //     var dr = (now1 - this.lasttime) / 1000;
    //     this.x = this.x + this.sx * dr * 100;
    //     this.y = this.y + this.sy * dr * 50;
    //     ctx.fillStyle = this.color;
    //     ctx.fillRect(this.x, this.y, this.width, this.height);
    //     this.lasttime = now1;
    //     if (this.x + this.width >= gamewidth) {
    //         this.sx = -1*this.sx;
    //     } else if (this.x < 0) {
    //         this.sx = -1*this.sx;
    //     }
    //     if (this.y + this.height >= gameheight) {
    //         this.sy = -1*this.sy;
    //     } else if (this.y < 0) {
    //         this.sy = -1*this.sy;
    //     }
    //
    //
    //
    // };
    //
    // function init() {
    //     firscub = new Makerect(20, 0, 100, 100, "#000", 1, 1, Date.now());
    //     rectArr.push(firscub);
    //     console.log(rectArr)
    //     someRect = new Square(50, '#fff');
    //     draw()
    // }
    //
    // function draw() {
    //     ctx.fillStyle = "#fff";
    //     ctx.fillRect(0, 0, gamewidth, gameheight);
    //     ctx.fillStyle = "rgb(142, 27, 114)";
    //     for( var i = 0; i < rectArr.length; i++){
    //       rectArr[rectArr[i].draw()]
    //     }
    //     // firscub.draw();
    //
    //     window.requestAnimationFrame(draw);
    // }
    // init();

    ////////////////////////////////////end second
    // draw();

    ///////первая версия
    // var myRect = {
    //     x: 50,
    //     y: 0,
    //     speedx: 1,
    //     speedy: 1,
    //     width: 100,
    //     height: 100,
    //     color: "#c23a3a",
    //     go: function() {
    //         ctx.fillStyle = this.color;
    //         ctx.fillRect(this.x, this.y, this.width, this.height);
    //
    //
    //     },
    //     clickevent: function() {
    //         var myself = this;
    //
    //         canvas.addEventListener('click', function(e) {
    //             e.preventDefault();
    //             mouse = {
    //                 x: e.pageX - canvasCoord.left,
    //                 y: e.pageY - canvasCoord.top
    //             }
    //             if (myself.x < mouse.x && myself.x + myself.width > mouse.x && myself.y < mouse.y && myself.y + myself.height > mouse.y) {
    //                 myself.speedx = -1 * myself.speedx;
    //                 myself.speedy = -1 * myself.speedy
    //             }
    //         })
    //     }
    // }
    //
    //
    //
    //
    // draw();
    //
    // var update = function(timestep) {
    //     myRect.x = myRect.x + (myRect.speedx * timestep * 100);
    //     myRect.y = myRect.y + (myRect.speedy * timestep * 100 / 2);
    //
    //     if (myRect.x + myRect.width >= gamewidth) {
    //         myRect.speedx = -1
    //     } else if (myRect.x < 0) {
    //         myRect.speedx = 1
    //     }
    //     if (myRect.y + myRect.height >= gameheight) {
    //         myRect.speedy = -1;
    //     } else if (myRect.y < 0) {
    //         myRect.speedy = 1;
    //     }
    //
    // }
    //
    //
    //
    // function draw() {
    //     ctx.clearRect(0, 0, gamewidth, gameheight);
    //     ctx.fillStyle = "#fff";
    //     ctx.fillRect(0, 0, gamewidth, gameheight);
    //     ctx.fillStyle = "rgb(142, 27, 114)";
    // }
    //
    // // window.addEventListener("resize", function () {
    // //   gamewidth =document.documentElement.clientWidth;
    // //   gameheight = gamewidth/1.7777;
    // //   canvas.width = gamewidth;
    // //   canvas.height = gameheight;
    // //   draw();
    // // })
    //
    //
    // var lasttime = Date.now();
    // // console.log(lasttime)
    // function init() {
    //     myRect.clickevent();
    // }
    // init();
    //
    // function start() {
    //   var now1 = Date.now();
    //   var dr = (now1 - lasttime) / 1000;
    //   update(dr);
    //     gamewidth = document.documentElement.clientWidth;
    //     gameheight = gamewidth / 1.7777;
    //     canvas.width = gamewidth;
    //     canvas.height = gameheight;
    //
    //
    //
    //     draw();
    //
    //     myRect.go();
    //     lasttime = now1;
    //     window.requestAnimationFrame(start);
    // }
    // start();
    //



}())

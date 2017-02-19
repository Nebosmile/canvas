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
var Letercell = 1 / 15 * gamewidth;
var imgsrcArr = ["img/Arena_HA_big.jpg", "img/words.png"];
var imgarr = {};


var letters = {
    "a": [1, 0],
    "b": [101, 0],
    "c": [201, 0],
    "d": [301, 0],
    "e": [401, 0],
    "f": [501, 0],
    "g": [601, 0],
    "h": [701, 0],
    "i": [801, 0],
    "j": [901, 0],
    "k": [1001, 0],
    "l": [1101, 0],
    "o": [1401, 0],
    "n": [1301, 0],
    "p": [1501, 0],
    "m": [1201, 0],
    "q": [1601, 0],
    "r": [1701, 0],
    "s": [1801, 0],
    "t": [1901, 0],
    "u": [2001, 0],
    "v": [2101, 0],
    "w": [2201, 0],
    "x": [2301, 0],
    "y": [2401, 0],
    "z": [2501, 0],
    "-": [2601, 0],
}


class Leter {
    constructor(name, x, y) {
      this.Xsprite =letters[name][0];
      this.Ysprite =letters[name][1];
      this.Xposition = x;
      this.Yposition = y;
      this.width = Letercell;
      this.height = 1.1*Letercell;
    }
    draw(){
      console.log(this)
      ctx.drawImage(imgarr["img/words.png"], this.Xsprite, this.Ysprite, 100, 110, this.Xposition, this.Yposition, this.width, this.height);
    }
}




function imgOnload(arr) {
    console.log(arr)
    var arrsize = arr.length;
    var i = 0;

    loadim();

    function loadim() {
        console.log(i + " " + arrsize)
        if (i < arrsize) {
            var img = new Image();
            img.src = arr[i];
            imgarr[arr[i]] = img;
            i++;
            img.onload = function() {
                loadim();
            }
        } else if (i == arrsize) {

            draw();
        }
    }

}
imgOnload(imgsrcArr);

var Letters_a = new Leter("h",0,0);
console.log(Letters_a);

function draw() {
    var img = new Image();
    img.src = "img/Arena_HA_big.jpg";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, gamewidth, gameheight);
    ctx.drawImage(img, 0, 0, 300, 100);
    console.log(imgarr["img/Arena_HA_big.jpg"]);
    ctx.drawImage(imgarr["img/Arena_HA_big.jpg"], 0, 0, gamewidth, gameheight);
    Letters_a.draw();

}




canvas.addEventListener('click', function(e) {
    e.preventDefault();
    mouse = {
        x: e.pageX - canvasCoord.left,
        y: e.pageY - canvasCoord.top
    }
    if (myself.x < mouse.x && myself.x + myself.width > mouse.x && myself.y < mouse.y && myself.y + myself.height > mouse.y) {

    }
})

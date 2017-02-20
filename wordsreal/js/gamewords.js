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

var words = {
    "_garden": {
        "english": "garden",
        "russian": "сад"
    },
    "_tree": {
        "english": "tree",
        "russian": "дерево"
    },
    "_earth": {
        "english": "earth",
        "russian": "земля"
    },
    "_wind": {
        "english": "wind",
        "russian": "ветер"
    },
    "_grow": {
        "english": "grow",
        "russian": "рости"
    },
}





var wordsone = {
    y: 5 * Letercell,
    x: Letercell
}
var answersone = {
    y: 5.5 * Letercell,
    x: Letercell
}
var letersone = {
    y: 7 * Letercell,
    x: Letercell
}



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
};


class Leter {
    constructor(name, x, y) {
        this.Xsprite = letters[name][0];
        this.Ysprite = letters[name][1];
        this.Xposition = x;
        this.Yposition = y;
        this.width = Letercell;
        this.height = 1.1 * Letercell;
    }
    draw() {

        ctx.drawImage(imgarr["img/words.png"], this.Xsprite, this.Ysprite, 100, 110, this.Xposition, this.Yposition, this.width, this.height);
    }
}




function imgOnload(arr) {

    var arrsize = arr.length;
    var i = 0;

    loadim();

    function loadim() {

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

var Letters_a = new Leter("a", 0, 0);

// function wordForTranslate() {
//     ctx.fillStyle = "#fff";
//     var corx = wordsone.x;
//     var cory = wordsone.y;
//     ctx.fillRect(0, 0, gamewidth, gameheight);
// }

// function makeGame() {
//     ctx.fillStyle = "#00F";
//     ctx.font = "italic 30pt Arial";
//     ctx.fillText("dgfghg", a, b);
// }

function draw() {

    ctx.drawImage(imgarr["img/Arena_HA_big.jpg"], 0, 0, gamewidth, gameheight);
    ctx.fillStyle = "#fff";

}



//перемешивание массива
function compareRandom(a, b) {
  return Math.random() - 0.5;
}

//отслеживаем клик.
canvas.addEventListener('click', function(e) {
    e.preventDefault();
    mouse = {
        x: e.pageX - canvasCoord.left,
        y: e.pageY - canvasCoord.top
    }
    if (myself.x < mouse.x && myself.x + myself.width > mouse.x && myself.y < mouse.y && myself.y + myself.height > mouse.y) {

    }
})

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
var Letercell = 1 / 14 * gamewidth;
var letersize =1/2*Letercell
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


///////////////////////////////////классы
class Playbutton {
    constructor(name) {
        this.text = name;
        this.x = 7 * Letercell - 25;
        this.y = gameheight / 2 - 15;
        this.status = "off";
        var newThis = this;

        canvas.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(newThis.status);
            console.log(mouse);
            if (newThis.status == "on" && mouse.x > newThis.x && mouse.x < newThis.x + 50 && mouse.y > newThis.y && mouse.y < newThis.y + 30) {
                this.status = false;
                draw();
                generete();

            }


        })

    }
    draw() {
        this.status = 'on';
        ctx.fillStyle = "#ed3b3b";
        ctx.fillRect(this.x, this.y, 50, 30);
        ctx.fillStyle = "#fff";
        ctx.font = "italic 20px Arial";
        ctx.fillText(this.text, this.x + 5, this.y + 20);

    }
    remove() {
        this.status = false;
    }

}


class Leter {
    constructor(name, x, y) {
        this.name=name;
        this.Xsprite = letters[name][0];
        this.Ysprite = letters[name][1];
        this.Xposition = x;
        this.Yposition = y;
        this.width = letersize;
        this.height = 1.1 * letersize;
    }
    draw() {

        ctx.drawImage(imgarr["img/words.png"], this.Xsprite, this.Ysprite, 100, 110, this.Xposition, this.Yposition, this.width, this.height);
    }
}

///////////////////////////////////////////////////////////////контент игры


canvas.addEventListener('click', function(e) {
    e.preventDefault();
    mouse = {
        x: e.pageX - canvasCoord.left,
        y: e.pageY - canvasCoord.top
    }
    for( var key in askletters){
      if((askletters[key].Xposition <mouse.x && askletters[key].Xposition+askletters[key].width>mouse.x) && (askletters[key].Yposition < mouse.y && askletters[key].Yposition+askletters[key].height>mouse.y) ){
        console.log(askletters[key]);
        if(askletters[key].name == keyWord.english[counter]){
          console.log('true');
          answerArr[counter]=askletters[key].name;
          delete askletters[key]
          console.log(askletters)
          workWithWord();
          counter++;
          if(counter==keyWord.english.length){
            checkwords();
          }
        }else{
          console.log('false');
        }
      }
    }
})

function checkwords() {
  var isAnswer =answerArr.join('');
  console.log(isAnswer);
  console.log(keyWord.english);
  if(keyWord.english==isAnswer){
    console.log('you give true ansver');
    counter=0;
    translategame();

  }else{
    console.log('it is false answer');
  }
}

var playbtn = new Playbutton("play"); // кнопка старт.


//переменные для хранения состояния
var wordsArr = []; /// масив для хранения ключей
var keyWord;  // текущее слово-ключ
var answerArr =[]; // тут храним текущий ответ - массим букв
var askletters ={}// тут хранятся буквы слова для атвета которые при нажатии переносятся в answerArr
var counter =0;  //текущий прогрес ответа. если назвали 3 первые буквы правильно то прогрес = второму индексу.


// создаем массив из ключей по которым будем вызывать случайные слова.
function makewordsArr(obj) {
    for (key in obj) {
        wordsArr.push(key)
    }
    console.log(wordsArr);
}

function init() {
    draw();//арена
    playbtn.draw();
    // requestAnimationFrame(init);
}
//////генерируем все необходимые массивы и обьекты для раунда и стартуем.
function generete() {
  /// функция должна отправить запрос, получить ответ. из него создаем массив ключей и сохраняем проверочный обьект. в данный момент это words

  makewordsArr(words);// массив ключей.
///запускаем игру
  translategame();
}

function translategame() {
  /////генерируем случайное слово по ключу
  var wordforForTranslate =randomInteger(0, wordsArr.length-1);
  keyWord = words[wordsArr[wordforForTranslate]];
  console.log(keyWord);
  /////генерируем массив для строки ответа
  var answerWord = keyWord.english;
  answerWord = answerWord.split('');

  console.log(answerWord)
  answerArr =new Array(answerWord.length);



  //////генерируем масив букв для ответа
  var randmass;
  givemerund();
  ///////перемешиваем массив пока не получим уникальное значение.
  function givemerund() {
    randmass = answerWord.sort(compareRandom);
    console.log(randmass.join(''));
    var a =keyWord.english;
    var b =answerWord.join('');
    if(a==b){
      givemerund();
    }
  }

  for(var i =0; i<answerWord.length;i++){
    var a = 3/4*letersone.x*i +letersone.x;
    var b = letersone.y;
    askletters[i]= new Leter(answerWord[i],a,b);

  }




  /////////генерируем таймер



  ////генерируем персонажа



  ////генерируем Соперника.


/////вызываем функцию отрисовки.
  workWithWord()
}



///функция отрисовки всех частей игровой арены.
function   workWithWord() {
  ///отрисовали арену.
  draw();
  //////отрисовываем строку- слово для перевода.
  askWord();

  //// отрисовываем массив букв
  answerLetter();

  /////отрисовываем ответ.
  answerWord();
}


//функция отрисовки слова для перевода
function askWord() {
      var lang = 'russian';//должно передаватся из переменной в зависимости от выбора игрока. пока задаем принудительно
      var string = keyWord[lang];

      var a = wordsone.x;
      var b = wordsone.y;
      ctx.fillStyle = "#fff";
      ctx.font = "italic 30pt Arial";
      ctx.fillText(string, a, b);
      console.log(string);

}

//функция отрисовки букв ответа
function answerLetter() {
  for( var key in askletters){
    askletters[key].draw();
  }

}

///функция отрисовки слова ответа
function answerWord() {
  // answerArr[1]='a';
  for(var i = 0; i<answerArr.length;i++){
    var a = 3/4*answersone.x*i +answersone.x;
    var b = answersone.y;


    ctx.fillStyle = "#fff";
    ctx.fillRect(a, b, letersize+5, letersize+5);
    if(answerArr[i] !=undefined){
      ctx.font = "italic "+letersize+"pt Arial";
      ctx.fillStyle = "#073721";
      ctx.fillText(answerArr[i], a+3, b+letersize);
    }
      }
      return;
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

            init();
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

//случайное число
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

//отслеживаем клик.

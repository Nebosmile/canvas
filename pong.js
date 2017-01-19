function init() {
    canvas = document.getElementById('pong');
    canvas.width = 480;
    canvas.height = 320;
    context = canvas.getContext('2d');
    draw();
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, 480, 320);
}

console.log('I am test!');

init();

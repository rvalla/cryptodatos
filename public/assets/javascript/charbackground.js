//Building a canvas to create the background...
const canvas = document.getElementById("char_background");
const context = canvas.getContext("2d");

const chars = "ingenioINGENIOclaveCLAVECR1P70DA70ScriptodatosCRIPTODATOScr1p70dat0s    /.-_?";
let fontSize = 25;
let columns, rows, margins;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (canvas.width > canvas.height) {
    fontSize = Math.floor(canvas.width/85);
  } else {
    fontSize = Math.floor(canvas.height/75);
  }  
  columns = Math.floor(canvas.width/fontSize);
  rows = Math.floor(canvas.height/fontSize);
  margin = [Math.floor(fontSize/3),Math.floor(fontSize)];
  
}

function draw() {
  resize();
  context.fillStyle = "#222222";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#55bb55";
  context.font = fontSize + "px monospace";
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      context.fillText(char, margin[0] + c * fontSize, margin[1] + r * fontSize);
    }
  }
  console.log("Background is ready...");
}

resize();
window.addEventListener("resize", draw);
draw();

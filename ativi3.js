const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 800;
const height = 600;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#11111b';
ctx.fillRect(0, 0, width, height);

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath(); 
  
  ctx.fillStyle = '#f9e2af';
  ctx.fill();
  ctx.strokeStyle = '#fab387';
  ctx.lineWidth = 6;
  ctx.stroke();
}

drawStar(400, 260, 5, 140, 60);

ctx.beginPath();
ctx.moveTo(250, 480);
ctx.lineTo(550, 480);
ctx.lineTo(500, 430);
ctx.lineTo(300, 430);
ctx.closePath();

ctx.fillStyle = '#313244';
ctx.fill();
ctx.strokeStyle = '#cba6f7';
ctx.lineWidth = 4;
ctx.stroke();

ctx.font = 'bold 32px sans-serif';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

ctx.fillText('EMBLEMA 2026', 400, 260);

ctx.font = 'bold 22px sans-serif';
ctx.fillStyle = '#cba6f7';
ctx.fillText('EXERCÍCIO 3', 400, 455);

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('exercicio3_resultado.png', buffer);
console.log('exercicio3_resultado.png gerado com sucesso!');
const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 800;
const height = 600;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#222';
ctx.fillRect(0, 0, width, height);

const startX = 50;
const startY = 150;
const tileSize = 35;

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    if ((row + col) % 2 === 0) {
      ctx.fillStyle = '#f5e0dc';
    } else {
      ctx.fillStyle = '#6c7086';
    }
    ctx.fillRect(startX + col * tileSize, startY + row * tileSize, tileSize, tileSize);
  }
}

const centerX = 550;
const centerY = 290;
const totalCircles = 6;
const maxRadius = 130;
const step = maxRadius / totalCircles;

for (let i = 0; i < totalCircles; i++) {
  const currentRadius = maxRadius - i * step;

  ctx.beginPath();
  ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);

  ctx.fillStyle = i % 2 === 0 ? '#f38ba8' : '#ffffff';
  ctx.fill();
  
  ctx.strokeStyle = '#11111b';
  ctx.lineWidth = 2;
  ctx.stroke();
}

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('exercicio2_resultado.png', buffer);
console.log('exercicio2_resultado.png gerado com sucesso!');
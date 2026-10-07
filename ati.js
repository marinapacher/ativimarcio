const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 800;
const height = 600;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#1e1e2e';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = '#89b4fa';
ctx.fillRect(300, 250, 200, 250);

ctx.strokeStyle = '#f9e2af';
ctx.lineWidth = 6;
ctx.strokeRect(300, 250, 200, 250);

ctx.fillStyle = '#b4befe';
ctx.fillRect(325, 120, 150, 110);
ctx.strokeRect(325, 120, 150, 110);

ctx.beginPath();
ctx.arc(365, 165, 20, 0, Math.PI * 2);
ctx.fillStyle = '#a6e3a1';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(435, 165, 20, 0, Math.PI * 2);
ctx.fillStyle = '#a6e3a1';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(365, 165, 8, 0, Math.PI * 2);
ctx.arc(435, 165, 8, 0, Math.PI * 2);
ctx.fillStyle = '#11111b';
ctx.fill();

ctx.fillStyle = '#f38ba8';
ctx.fillRect(365, 200, 70, 15);

ctx.beginPath();
ctx.arc(400, 90, 15, 0, Math.PI * 2);
ctx.fillStyle = '#f38ba8';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 120);
ctx.lineTo(400, 105);
ctx.stroke();

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('exercicio1_resultado.png', buffer);
console.log('exercicio1_resultado.png gerado com sucesso!');
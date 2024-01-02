const canvas = document.getElementById('matrixCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()-_=+';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()-_=+';
const nums = katakana + latin;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = nums.charAt(Math.floor(Math.random() * nums.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }

}

function showCursor() {
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.opacity = '1'; // Ou outra propriedade para mostrar o cursor
  }

function enableBlur() {
    canvas.style.filter = 'blur(1px)';
}
function showInfoContainer() {
    const infoContainer = document.getElementById('jsonResume');
    infoContainer.classList.remove('hidden');
    infoContainer.classList.add('visible');
  }


setInterval(draw, 30);
setTimeout(enableBlur, 2000);
setTimeout(showInfoContainer, 2000);
setTimeout(showCursor, 2100);

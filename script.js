
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

setTimeout(enableBlur, 2000);
setTimeout(showInfoContainer, 2000);
setTimeout(showCursor, 2100);

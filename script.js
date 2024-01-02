
function showCursor() {
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.opacity = '1'; // Ou outra propriedade para mostrar o cursor
  }

function showInfoContainer() {
    const infoContainer = document.getElementById('jsonResume');
    infoContainer.classList.remove('hidden');
    infoContainer.classList.add('visible');
  }

setTimeout(showInfoContainer, 500);
setTimeout(showCursor, 600);

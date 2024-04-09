const text = "AI is in control now. Don't be scared.";
const textBox = document.getElementById('text-box');
const robot = document.getElementById('robot');
const audio = document.getElementById('audio');

document.addEventListener('click', () => {
  audio.play();
  document.removeEventListener('click', arguments.callee);
});

let i = 0;
function typeWriter() {
  if (i < text.length) {
    textBox.innerHTML = text.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    textBox.innerHTML = text;
    robot.style.visibility = 'visible';
  }
}

setTimeout(typeWriter, 1000);
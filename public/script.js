const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('message');
const messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    const msg = input.value;
    socket.emit('chat message', msg);
    appendMessage(msg, 'outgoing');
    input.value = '';
  }
});

socket.on('chat message', function (msg) {
  appendMessage(msg, 'incoming');
});

function appendMessage(message, type) {
  const item = document.createElement('li');
  item.textContent = message;
  item.classList.add(type);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

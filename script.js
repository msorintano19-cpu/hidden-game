fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const chat = document.getElementById('chat');
    data.messaggi.forEach(msg => {
      const div = document.createElement('div');
      div.style.color = data.personaggi.find(p => p.nome === msg.mittente).colore;
      div.textContent = `${msg.mittente}: ${msg.testo}`;
      chat.appendChild(div);
    });
  });

// Riferimenti DOM
const apps = document.querySelectorAll('.app');
const popup = document.getElementById('popup');
const appTitle = document.getElementById('app-title');
const appContent = document.getElementById('app-content');

// Gestione clic sulle icone
apps.forEach(app => {
  app.addEventListener('click', () => {
    const appName = app.getAttribute('data-app');
    appTitle.textContent = appName;
    popup.style.display = 'flex';
    popup.classList.remove('hide');
    popup.classList.add('show');
    appContent.innerHTML = '';

    switch(appName) {
      case 'WhatsApp':
        loadWhatsApp();
        break;
      case 'Mail':
        loadMail();
        break;
      case 'Safari':
        loadSafari();
        break;
      case 'Memo':
        loadMemo();
        break;
      default:
        appContent.innerHTML = `<p>${appName} non ancora attiva.</p>`;
    }
  });
});

// Funzione Chiudi App
function closeApp() {
  popup.classList.remove('show');
  popup.classList.add('hide');
  setTimeout(() => {
    popup.style.display = 'none';
    popup.classList.remove('hide');
  }, 300);
}

// --- WhatsApp ---
function loadWhatsApp() {
  const chats = [
    {from:'other', text:'Non riesco a dormire.'},
    {from:'luca', text:'Non stai sbagliando. Stai interrompendo il processo.'},
    {from:'other', text:'E se perdo il controllo?'},
    {from:'luca', text:'Il controllo non si cerca. Arriva da solo.'},
    {from:'other', text:'Ma fa paura restare da soli così.'},
    {from:'luca', text:'L’isolamento è una fase necessaria.'},
    {from:'other', text:'Quindi devo solo… lasciar succedere?'},
    {from:'luca', text:'Non forzare. Non interrompere.'}
  ];
  chats.forEach(msg=>{
    const div = document.createElement('div');
    div.className = 'message ' + (msg.from==='luca'?'from-luca':'from-other');
    div.textContent = msg.text;
    appContent.appendChild(div);
  });
}

// --- Mail ---
function loadMail() {
  const mails = [
    {from:'Marco De Santis', subject:'Chiarimento', text:'Buongiorno dottore, volevo ringraziarla per il lavoro fatto negli anni. Alcuni concetti mi sono tornati utili anche recentemente. In particolare l’idea che il processo non vada interrotto. Spero di aver compreso correttamente.'},
    {from:'Ordine Psicologi', subject:'Segnalazione n. 4187/22 – Archiviazione', text:'Gentile dott. Ferretti, la informiamo che la segnalazione in oggetto è stata archiviata non essendo emerse violazioni formali. Si raccomanda tuttavia maggiore cautela nell’utilizzo di protocolli non standardizzati con pazienti emotivamente fragili.'},
    {from:'Elena Rinaldi', subject:'Luca', text:'Non so se sto facendo la cosa giusta. Luca mi ha chiesto di lasciarlo solo. Dice che è importante, che è un esercizio. Io ho paura ma non voglio sembrare quella che non capisce. Ti scrivo solo per dirlo a qualcuno.'},
    {from:'Studio Ferretti', subject:'Promemoria appuntamento', text:'Questo è un messaggio automatico. Si ricorda l’appuntamento previsto per il giorno 15/03/2025 alle ore 09:00 presso lo Studio Ferretti. Non rispondere a questa email.'}
  ];
  mails.forEach(mail=>{
    const div = document.createElement('div');
    div.style.borderBottom='1px solid #ccc';
    div.style.padding='8px 6px';
    div.innerHTML = `<b>${mail.from}</b> - <i>${mail.subject}</i><br>${mail.text}`;
    appContent.appendChild(div);
  });
}

// --- Safari ---
function loadSafari() {
  appContent.innerHTML = `<p>🌐 Pagina web di prova di Luca</p>`;
}

// --- Memo ---
function loadMemo() {
  appContent.innerHTML = `<p>14/03/2025: Lasciare che il processo si chiuda</p>`;
}

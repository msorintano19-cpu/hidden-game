const start = document.getElementById("start");
const phone = document.getElementById("phone");
const home = document.getElementById("home");
const appViewEl = document.getElementById("appView");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");
const openBtn = document.getElementById("openPhone");

let currentApp = null;
let whatsappState = "list";

// ORARIO REALE EUROPEO
function updateClock() {
  const clockEl = document.getElementById("clock");
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Berlin' };
  clockEl.textContent = now.toLocaleTimeString('it-IT', options);
}
updateClock();
setInterval(updateClock, 1000);

// APRI TELEFONO
openBtn.onclick = () => {
  start.classList.add("hidden");
  phone.classList.remove("hidden");
};

// APRI APP
function openApp(app) {
  currentApp = app;
  home.classList.add("hidden");
  appViewEl.classList.remove("hidden");
  appViewEl.classList.remove("swipeUp");
  setTimeout(() => appViewEl.classList.add("show"), 50);

  if(app==='whatsapp') showWhatsappList();
  if(app==='mail') showMail();
  if(app==='safari') showSafari();
  if(app==='memo') showMemo();
}

// BACK / SWIPE
function goBack() {
  if(currentApp==='whatsapp' && whatsappState==='chat') { showWhatsappList(); return; }
  appViewEl.classList.remove("show");
  appViewEl.classList.add("swipeUp");
  setTimeout(() => {
    appViewEl.classList.add("hidden");
    home.classList.remove("hidden");
    appViewEl.classList.remove("swipeUp");
    currentApp = null;
  }, 400);
}

// SWIPE TOUCH
let startY=0;
appViewEl.addEventListener('touchstart', e=>{ startY = e.touches[0].clientY; });
appViewEl.addEventListener('touchend', e=>{ 
  if(startY - e.changedTouches[0].clientY > 100) goBack();
});

/* ---------------- WHATSAPP ---------------- */
function showWhatsappList() {
  whatsappState="list";
  appTitle.textContent="WhatsApp";
  appContent.innerHTML=`
    <div class="chatItem" onclick="openChatA()">Marco De Santis</div>
    <div class="chatItem" onclick="openChatB()">Elena Rinaldi</div>
    <div class="chatItem" onclick="openChatC()">Note personali</div>
  `;
}

function openChatA(){
  whatsappState="chat";
  appTitle.textContent="Marco De Santis";
  appContent.innerHTML=`
    <div class="chatMessage contact">Non riesco a dormire.</div>
    <div class="chatMessage user">Non stai sbagliando. Stai interrompendo il processo.</div>
    <div class="chatMessage contact">E se perdo il controllo?</div>
    <div class="chatMessage user">Il controllo non si cerca. Arriva da solo.</div>
    <div class="chatMessage contact">Ma fa paura restare da soli così.</div>
    <div class="chatMessage user">L’isolamento è una fase necessaria. Non forzare.</div>
  `;
}

function openChatB(){
  whatsappState="chat";
  appTitle.textContent="Elena Rinaldi";
  appContent.innerHTML=`
    <div class="chatMessage contact">Torno alle 21. Vuoi che prendiamo qualcosa da mangiare?</div>
    <div class="chatMessage user">No. Stasera devo restare solo.</div>
    <div class="chatMessage contact">Di nuovo?</div>
    <div class="chatMessage user">È un esercizio. Serve che nessuno intervenga.</div>
    <div class="chatMessage contact">Non mi piace quando parli così.</div>
    <div class="chatMessage user">Fidati. È parte del processo.</div>
  `;
}

function openChatC(){
  whatsappState="chat";
  appTitle.textContent="Note personali";
  appContent.innerHTML=`
    <div class="chatMessage user">Non intervenire. Non interrompere. Lascia che il processo si chiuda.</div>
    <div class="chatMessage user">Il controllo arriva solo alla fine.</div>
  `;
}

/* ---------------- MAIL ---------------- */
function showMail(){
  appTitle.textContent="Mail";
  appContent.innerHTML=`
    <div class="emailItem">
      <div class="emailSender">Marco → Studio Ferretti</div>
      <div class="emailSubject">Il processo non va interrotto</div>
    </div>
    <div class="emailItem">
      <div class="emailSender">Ordine Psicologi</div>
      <div class="emailSubject">Segnalazione archiviata</div>
    </div>
    <div class="emailItem">
      <div class="emailSender">Elena → Chiara</div>
      <div class="emailSubject">Ho paura, lascialo solo</div>
    </div>
  `;
}

/* ---------------- SAFARI ---------------- */
function showSafari(){
  appTitle.textContent="Safari";
  appContent.innerHTML="<p>Pagina di ricerca disabilitata.</p>";
}

/* ---------------- MEMO ---------------- */
function showMemo(){
  appTitle.textContent="Memo";
  appContent.innerHTML="<p>Lasciare che il processo si chiuda (14/03/2025)</p>";
}

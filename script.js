const start = document.getElementById("start");
const phone = document.getElementById("phone");
const home = document.getElementById("home");
const appView = document.getElementById("appView");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");
const openBtn = document.getElementById("openPhone");

let currentApp = null;
let whatsappState = "list";

// APRI TELEFONO
openBtn.onclick = () => {
  start.classList.add("hidden");
  phone.classList.remove("hidden");
};

// APRI APP
function openApp(app) {
  currentApp = app;
  home.classList.add("hidden");
  appView.classList.remove("hidden");

  if (app === "whatsapp") showWhatsappList();
  if (app === "email") showEmails();
  if (app === "google") showGoogle();
  if (app === "memo") showMemo();
}

// BACK
function goBack() {
  if (currentApp === "whatsapp" && whatsappState === "chat") {
    showWhatsappList();
    return;
  }
  appView.classList.add("hidden");
  home.classList.remove("hidden");
  currentApp = null;
}

// ---------------- WHATSAPP ----------------
function showWhatsappList() {
  whatsappState = "list";
  appTitle.textContent = "WhatsApp";
  appContent.innerHTML = `
    <div class="item" onclick="openChatA()">Marco De Santis</div>
    <div class="item" onclick="openChatB()">Elena Rinaldi</div>
    <div class="item" onclick="openChatC()">Note personali</div>
  `;
}

function openChatA() {
  whatsappState = "chat";
  appTitle.textContent = "Marco De Santis";
  appContent.innerHTML = `
    <p><b>Marco:</b> Non riesco a dormire.</p>
    <p><b>Luca:</b> Stai interrompendo il processo.</p>
    <p><b>Marco:</b> E se perdo il controllo?</p>
    <p><b>Luca:</b> Arriva da solo.</p>
    <p><b>Luca:</b> Non interrompere.</p>
  `;
}

function openChatB() {
  whatsappState = "chat";
  appTitle.textContent = "Elena Rinaldi";
  appContent.innerHTML = `
    <p><b>Elena:</b> Torno alle 21.</p>
    <p><b>Luca:</b> Devo restare solo.</p>
    <p><b>Elena:</b> Ho paura.</p>
    <p><i>Ultimo accesso Luca: 19:12</i></p>
  `;
}

function openChatC() {
  whatsappState = "chat";
  appTitle.textContent = "Note personali";
  appContent.innerHTML = `
    <p>Non intervenire</p>
    <p>Non interrompere</p>
    <p>Il controllo arriva alla fine</p>
  `;
}

// ---------------- EMAIL ----------------
function showEmails() {
  appTitle.textContent = "Email";
  appContent.innerHTML = `
    <div class="item"><b>Marco → Studio</b><br>Il processo non va interrotto</div>
    <div class="item"><b>Ordine Psicologi</b><br>Segnalazione archiviata</div>
    <div class="item"><b>Elena → Chiara</b><br>Ho paura</div>
  `;
}

// ---------------- GOOGLE ----------------
function showGoogle() {
  appTitle.textContent = "Google";
  appContent.innerHTML = `<p>Connessione limitata.</p>`;
}

// ---------------- MEMO ----------------
function showMemo() {
  appTitle.textContent = "Memo";
  appContent.innerHTML = `
    <p>14/03/2025</p>
    <p>Lasciare che il processo si chiuda.</p>
  `;
}

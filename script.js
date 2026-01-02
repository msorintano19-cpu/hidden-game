const start = document.getElementById("start");
const phone = document.getElementById("phone");
const appView = document.getElementById("appView");
const appContent = document.getElementById("appContent");
const appTitle = document.getElementById("appTitle");
const openBtn = document.getElementById("openPhone");

let currentApp = null;
let whatsappState = "list"; // list | chat

openBtn.onclick = () => {
  start.classList.add("hidden");
  phone.classList.remove("hidden");
};

function openApp(app) {
  currentApp = app;
  phone.classList.add("hidden");
  appView.classList.remove("hidden");

  if (app === "whatsapp") showWhatsappList();
  if (app === "email") showEmails();
  if (app === "google") {
    appTitle.textContent = "Google";
    appContent.innerHTML = "<p>Ricerca disabilitata.</p>";
  }
}

/* ---------------- WHATSAPP ---------------- */

function showWhatsappList() {
  whatsappState = "list";
  appTitle.textContent = "WhatsApp – Luca";

  appContent.innerHTML = `
    <div class="chatItem" onclick="openChatA()">Marco De Santis</div>
    <div class="chatItem" onclick="openChatB()">Elena Rinaldi</div>
    <div class="chatItem" onclick="openChatC()">Note personali</div>
  `;
}

function openChatA() {
  whatsappState = "chat";
  appTitle.textContent = "Marco De Santis";
  appContent.innerHTML = `
    <p><b>Marco:</b> Non riesco a dormire.</p>
    <p><b>Luca:</b> Non stai sbagliando. Stai interrompendo il processo.</p>
    <p><b>Marco:</b> E se perdo il controllo?</p>
    <p><b>Luca:</b> Il controllo non si cerca. Arriva da solo.</p>
    <p><b>Marco:</b> Ma fa paura restare da soli così.</p>
    <p><b>Luca:</b> L’isolamento è una fase necessaria.</p>
    <p><b>Marco:</b> Quindi devo solo… lasciar succedere?</p>
    <p><b>Luca:</b> Non forzare. Non interrompere.</p>
  `;
}

function openChatB() {
  whatsappState = "chat";
  appTitle.textContent = "Elena Rinaldi";
  appContent.innerHTML = `
    <p><b>Elena:</b> Torno alle 21. Vuoi mangiare qualcosa?</p>
    <p><b>Luca:</b> No. Devo restare solo.</p>
    <p><b>Elena:</b> Di nuovo?</p>
    <p><b>Luca:</b> È un esercizio.</p>
    <p><b>Elena:</b> Non mi piace quando parli così.</p>
    <p><b>Luca:</b> Fidati. È parte del processo.</p>
    <p><i>Ultimo accesso Luca: 19:12</i></p>
  `;
}

function openChatC() {
  whatsappState = "chat";
  appTitle.textContent = "Note personali";
  appContent.innerHTML = `
    <p>Non intervenire</p>
    <p>Non interrompere</p>
    <p>Lascia che il processo si chiuda</p>
    <p><i>Il controllo arriva solo alla fine</i></p>
  `;
}

/* ---------------- EMAIL ---------------- */

function showEmails() {
  appTitle.textContent = "Email";
  appContent.innerHTML = `
    <div class="chatItem"><b>Marco → Studio Ferretti</b><br>“Il processo non va interrotto”</div>
    <div class="chatItem"><b>Ordine Psicologi</b><br>Segnalazione archiviata</div>
    <div class="chatItem"><b>Elena → Chiara</b><br>“Ho paura”</div>
    <div class="chatItem"><b>Studio Ferretti</b><br>Promemoria appuntamento</div>
  `;
}

/* ---------------- BACK ---------------- */

function goHome() {
  if (currentApp === "whatsapp" && whatsappState === "chat") {
    showWhatsappList();
    return;
  }

  appView.classList.add("hidden");
  phone.classList.remove("hidden");
  currentApp = null;
}

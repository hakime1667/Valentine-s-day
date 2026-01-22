// Oggetto per salvare tutte le risposte
const answers = {};

// Nasconde tutte le pagine
function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
}

// Mostra una pagina specifica
function showPage(id) {
    hideAllPages();
    document.getElementById(id).classList.remove('hidden');
}

// Pulsante CONTINUA iniziale
function next(pageId) {
    showPage(pageId);
}

// Salva risposta da pulsante e passa alla prossima domanda
function answer(questionId, value) {
    answers[questionId] = value;

    if (questionId === 'q1') showPage('q2');
    else if (questionId === 'q2') showPage('q3');
    else if (questionId === 'q3') {
        document.getElementById('finalText').innerText = 'oggi e per sempre';
        showPage('final');
    }
}

// Salva risposta scritta e passa alla prossima domanda
function answerFromInput(questionId) {
    const input = document.getElementById(questionId + "input");
    const value = input.value.trim();

    if (value === "") {
        alert("Scrivi qualcosa prima di continuare 💕");
        return;
    }

    answer(questionId, value);
}

// Risposta finale SÌ
function finalYes() {
    sendEmail("SÌ");
    document.getElementById('resultText').innerText =
        "Hai detto SÌ. E io ti sceglierei altre mille volte.";
    showPage('result');
}

// Risposta finale NO
function finalNo() {
    showPage('noPage');
}

// NO → SÌ forzato 😌
function forcedYes() {
    sendEmail("SÌ (dopo ripensamento 😌)");
    document.getElementById('resultText').innerText =
        "Lo sapevo. Oggi, domani, per sempre.";
    showPage('result');
}

// Invio mail riepilogativa
function sendEmail(finalAnswer) {
    const subject = encodeURIComponent("San Valentino – Atto II 💕");
    let body = "Rajli l3ziz,
        'Anche quest anno sei stato fantastico.
        'Ecco il riepilogo delle mie risposte:\n\n";

    for (let key in answers) {
        body += `${key}: ${answers[key]}\n`;
    }

    body += `\nRisposta finale: ${finalAnswer}`;
    'Voglio essere la tua Valentina oggi e per sempre 💕';

    // apre il client di posta con mailto
    window.location.href =
        `mailto:hakime1667@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
}

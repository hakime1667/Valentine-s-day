const answers = {};

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
}

function showPage(id) {
    hideAllPages();
    document.getElementById(id).classList.remove('hidden');
}

function next(pageId) {
    showPage(pageId);
}

function answer(questionId, value) {
    answers[questionId] = value;

    if (questionId === 'q1') showPage('q2');
    else if (questionId === 'q2') showPage('q3');
    else if (questionId === 'q3') {
        document.getElementById('finalText').innerText = 'oggi e per sempre';
        showPage('final');
    }
}

function answerFromInput(questionId) {
    const input = document.getElementById(questionId + "input");
    const value = input.value.trim();

    if (value === "") {
        alert("Scrivi qualcosa prima di continuare 💕");
        return;
    }

    answer(questionId, value);
}

function finalYes() {
    sendEmail("SÌ");
    document.getElementById('resultText').innerText =
        "Hai detto SÌ. E io ti sceglierei altre mille volte.";
    showPage('result');
}

function finalNo() {
    showPage('noPage');
}

function forcedYes() {
    sendEmail("SÌ (dopo ripensamento 😌)");
    document.getElementById('resultText').innerText =
        "Lo sapevo. Oggi, domani, per sempre.";
    showPage('result');
}

function sendEmail(finalAnswer) {
    const subject = encodeURIComponent("San Valentino – Atto II 💕");

    let body = "Rajli l3ziz,\n\n";
    body += "Anche questa volta ti sei superato. Ecco a te il riepilogo delle mie risposte:\n\n";

    for (let key in answers) {
        body += `${key}: ${answers[key]}\n`;
    }

    body += `\nRisposta finale: ${finalAnswer}\n\n`;
    body += "Valentina oggi e per sempre ❤️\n";
    body += "Tua moglie";

    window.location.href =
        `mailto:hakime1667@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
}

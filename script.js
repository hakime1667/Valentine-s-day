const state = {};

function show(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function next(nextId) {
    show(nextId);
}

function answer(question, value) {
    state[question] = value;

    if (question === 'q1') next('q2');
    else if (question === 'q2') next('q3');
    else if (question === 'q3') next('final');
}

function finalYes() {
    sendEmail("SÌ diretto");
}

function finalNo() {
    show('noPage');
}

function forcedYes() {
    sendEmail("SÌ dopo ripensamento");
}

function sendEmail(type) {
    const subject = encodeURIComponent("San Valentino – Atto II 💍");
    const body = encodeURIComponent(
        `Rajli l3ziz,

        Anche quest'anno sei stato fantastico. Ecco a te il riepilogo delle mie risposte:\n\n` +
        `Domanda 1: ${state.q1}\n` +
        `Domanda 2: ${state.q2}\n` +
        `Domanda 3: ${state.q3}\n\n` +
        `Risposta finale: ${type}\n\n` +
        
        `Valentina oggi e per sempre ❤️`
    );

    window.location.href = `mailto:hakime1667@gmail.com?subject=${subject}&body=${body}`;

    showResult("Ora non ti resta che prepararti… io ho già detto sì a te. ❤️");
}

function showResult(message) {
    show('result');
    document.getElementById('resultText').innerText = message;
}


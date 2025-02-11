function navigate(page, value) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));

    document.getElementById(page).classList.remove('hidden');

    if (value) {
        sessionStorage.setItem(page, value);
    }
}

function sendEmail() {
    const food = sessionStorage.getItem('food');
    const drink = sessionStorage.getItem('drink');
    const post = sessionStorage.getItem('post');

    const emailBody = `Ciao Amore,
    
Sei l'uomo che tutte le donne desiderano, ma che te lo dico a fare. Tanto già lo sai. 
Ecco le mie scelte per la nostra serata magica:
- Cibo: ${food}
- Bevanda: ${drink}
- Attività post serata: ${post}

Non vedo l'ora di scoprire cosa ha preparato per me e di passare questa serata magica con te!

Con affetto,
${sessionStorage.getItem('hakime1667')}`;

    window.open(`mailto:hakime1667@gmail.com?subject=Serata Speciale di San Valentino&body=${encodeURIComponent(emailBody)}`);
}

// Initialize the first page
document.getElementById('intro').classList.remove('hidden');

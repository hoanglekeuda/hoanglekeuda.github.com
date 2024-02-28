document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = 'kylla';
    if (kirjautunut === 'kylla') {
        let tervetuloaTeksti = document.getElementById('tervetuloa_teksti');
        tervetuloaTeksti.textContent += " " + localStorage.getItem("nimi");
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}

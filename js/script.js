//FUNZIONI DA IMPLEMENTARE
function saluta() {
    alert("ciao benvenuto nel mio sito");
    console.log("ciao bello");
}
function compra() {
    let numero;
    numero = prompt("inserisci numero");
    while (numero !== null && (isNaN(numero) || numero <= 0)) {
        console.log("Età non valida");
        numero = prompt("inserisci numero");
    }
    if (numero != null) {
        if (numero < 5) {
            alert("costo biglietto 0€");
            console.log("costo biglietto 0€");
        } else if (numero >= 18 && numero <= 25) {
            alert("costo biglietto 3.5€");
            console.log("costo biglietto 3.5€");
        } else if (numero >= 50 && numero <= 55) {
            alert("costo biglietto 5€");
            console.log("costo biglietto 5€");
        } else {
            alert("costo biglietto 8€");
            console.log("costo biglietto 8€");
        }
    }
}
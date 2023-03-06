/*
Esercizio 1
Provate a scrivere il codice per verificare titolo e autore di un certo
volume contengonoo una certa sequenza di caratteri:
concatenate titolo e autore
convertite le maiuscole in minuscole
verificate la presenza della stringa
I tre elementi (autore, titolo e stringa) possono essere contenuti in tre
variabili. Cercate di scrivere un’unica riga per i tre passi precedenti,
componendo le funzioni con il punto (.). Non utilizzate form per
l’inserimento dei parametri, ma impostate i valori nelle variabili.
*/

// Import stylesheets
import './style.css';

// Write Javascript code!
let autore= "Mario";   //nome autore
let titolo= "Nuvole";  //nome titolo
let stringa= "ma";     //stringa inserita dall'utente

if(autore + " " + titolo.toLowerCase().includes(stringa.toLowerCase()))
{
  console.log("Autore:" + autore + "\" " + "Titolo:" + titolo + "\"");
}
else{
  console.log("Nessun risultato trovato");
}

/*oppure inner.html attaccandolo con 'demo'*/
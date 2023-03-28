const playButton = document.getElementById("playButton");
playButton.addEventListener("click", play);

function play() {
  // Genera un numero casuale tra 1 e 5
  const pcNumber = Math.floor(Math.random() * 5) + 1;

  // Legge il numero scelto dall'utente
  const userNumber = parseInt(document.getElementById("userNumber").value);

  // Calcola la somma
  let sum = pcNumber + userNumber;

  // Verifica se la somma è pari o dispari
  let result = "";
  if (sum % 2 == 0) {
    result = "pari";
  } else {
    result = "dispari";
  }

  // Verifica se l'utente ha vinto o perso
  let guess = document.getElementById("guess").value;
  let outcome = "";
  if (guess == result) {
    outcome = "Hai vinto!";
  } else {
    outcome = "Hai perso!";
  }

  // Mostra il risultato
  let message = "Il numero del computer era " + pcNumber + ". La somma è " + sum + ", quindi è " + result + ". " + outcome;
  document.getElementById("result").innerHTML = message;
}

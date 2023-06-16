
function playGame(playerMove) {
  var moves = ['steen', 'papier', 'schaar'];
  var computerMove = moves[Math.floor(Math.random() * moves.length)];

  var result = determineWinner(playerMove, computerMove);
  playSounds(playerMove, computerMove);
  countResults(playerMove, computerMove);

  var resultElement = document.getElementById('computer');
  var resultElement = document.getElementById('human');
  var resultElement = document.getElementById('result');

  resultElement.innerHTML = 'Jouw keuze: ' + playerMove + '<br>';
  resultElement.innerHTML += 'Computer: ' + computerMove + '<br>';
  resultElement.innerHTML += 'Uitkomst: ' + result + '<br>';
}

function determineWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'Gelijkspel!';
  } else if (
    (playerMove === 'steen' && computerMove === 'schaar') ||
    (playerMove === 'papier' && computerMove === 'steen') ||
    (playerMove === 'schaar' && computerMove === 'papier')
  ) {
    return 'Jij wint!';
  } else {
    return 'De computer wint!';
  }
}

function playSounds(playerMove, computerMove) {
  var winAudio = document.getElementById('winAudio');
  var verliesAudio = document.getElementById('verliesAudio');
  var gelijkAudio = document.getElementById('gelijkAudio');

  if (playerMove === computerMove) {
    gelijkAudio.play();
  } else if (
    (playerMove === 'steen' && computerMove === 'schaar') ||
    (playerMove === 'papier' && computerMove === 'steen') ||
    (playerMove === 'schaar' && computerMove === 'papier')
  ) {
    winAudio.play();
  } else {
    verliesAudio.play();
  }
}

function countResults(playerMove, computerMove) {
  var gelijkCounter = parseInt(document.getElementById('gelijkCounter').innerHTML);
  var winCounter = parseInt(document.getElementById('winCounter').innerHTML);
  var verliesCounter = parseInt(document.getElementById('verliesCounter').innerHTML);

  if (playerMove === computerMove) {
    gelijkCounter++;
    document.getElementById('gelijkCounter').innerHTML = gelijkCounter;
  } else if (
    (playerMove === 'steen' && computerMove === 'schaar') ||
    (playerMove === 'papier' && computerMove === 'steen') ||
    (playerMove === 'schaar' && computerMove === 'papier')
  ) {
    winCounter++;
    document.getElementById('winCounter').innerHTML = winCounter;
  } else {
    verliesCounter++;
    document.getElementById('verliesCounter').innerHTML = verliesCounter;
  }
}

function resetCounters() {
  document.getElementById('gelijkCounter').innerHTML = '0';
  document.getElementById('winCounter').innerHTML = '0';
  document.getElementById('verliesCounter').innerHTML = '0';
  var resetAudio = document.getElementById('resetAudio');
  resetAudio.play();
}

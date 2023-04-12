let fields = [];
let finishGame = false;
let currentPlanet = "mars";

// welcher Spieler ist aktiv
function showPick(i) {
  if (!fields[i] && !finishGame) {
    if (currentPlanet == "mars") {
      currentPlanet = "moon";
      document.getElementById("player-2").classList.remove("active-player");
      document.getElementById("player-1").classList.add("active-player");
    } else {
      currentPlanet = "mars";
      document.getElementById("player-1").classList.remove("active-player");
      document.getElementById("player-2").classList.add("active-player");
    }

    fields[i] = currentPlanet;
    console.log(fields);
    placePick();
    whoWins();
  }
}

// Funktion, die die Bilder in der jeweiligen Position anzeigt
function placePick() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "mars") {
      document.getElementById("mars-" + i).classList.remove("d-none");
    }
    if (fields[i] == "moon") {
      document.getElementById("moon-" + i).classList.remove("d-none");
    }
  }
}

//in welcher Situation wird gewonnen + Barke id
function whoWins() {
  const winningCombinations = [
    //rows
    [0, 1, 2, 3, 0],
    [1, 2, 3, 4, 1],
    [2, 3, 4, 5, 2],
    [3, 4, 5, 6, 3],
    [7, 8, 9, 10, 4],
    [8, 9, 10, 11, 5],
    [9, 10, 11, 12, 6],
    [10, 11, 12, 13, 7],
    [14, 15, 16, 17, 8],
    [15, 16, 17, 18, 9],
    [16, 17, 18, 19, 10],
    [17, 18, 19, 20, 11],
    [21, 22, 23, 24, 12],
    [22, 23, 24, 25, 13],
    [23, 24, 25, 26, 14],
    [24, 25, 26, 27, 15],
    [28, 29, 30, 31, 16],
    [29, 30, 31, 32, 17],
    [30, 31, 32, 33, 18],
    [31, 32, 33, 34, 19],
    [35, 36, 37, 38, 20],
    [36, 37, 38, 39, 21],
    [37, 38, 39, 40, 22],
    [38, 39, 40, 41, 23],
    [42, 43, 44, 45, 24],
    [43, 44, 45, 46, 25],
    [44, 45, 46, 47, 26],
    [45, 46, 47, 48, 27],
    //Columns
    [0, 7, 14, 21, 28],
    [7, 14, 21, 28, 29],
    [14, 21, 28, 35, 30],
    [21, 28, 35, 42, 31],
    [1, 8, 15, 22, 32],
    [8, 15, 22, 29, 33],
    [15, 22, 29, 36, 34],
    [22, 29, 36, 43, 35],
    [2, 9, 16, 23, 36],
    [9, 16, 23, 30, 37],
    [16, 23, 30, 37, 38],
    [23, 30, 37, 44, 39],
    [3, 10, 17, 24, 40],
    [10, 17, 24, 31, 41],
    [17, 24, 31, 38, 42],
    [24, 31, 38, 45, 43],
    [4, 11, 18, 25, 44],
    [11, 18, 25, 32, 45],
    [18, 25, 32, 39, 46],
    [25, 32, 39, 46, 47],
    [5, 12, 19, 26, 48],
    [12, 19, 26, 33, 49],
    [19, 26, 33, 40, 50],
    [26, 33, 40, 47, 51],
    [6, 13, 20, 27, 52],
    [13, 20, 27, 34, 53],
    [20, 27, 34, 41, 54],
    [27, 34, 41, 48, 55],
    //Diago
    [0, 8, 16, 24, 56],
    [1, 9, 17, 25, 60],
    [2, 10, 18, 26, 64],
    [3, 11, 19, 27, 68],
    [7, 15, 23, 31, 57],
    [8, 16, 24, 32, 61],
    [9, 17, 25, 33, 65],
    [10, 18, 26, 34, 69],
    [14, 22, 30, 38, 58],
    [15, 23, 31, 39, 62],
    [16, 24, 32, 40, 66],
    [17, 25, 33, 41, 70],
    [21, 29, 37, 45, 59],
    [22, 30, 38, 46, 63],
    [23, 31, 39, 47, 67],
    [24, 32, 40, 48, 71],
    [3, 9, 15, 21, 84],
    [4, 10, 16, 22, 80],
    [5, 11, 17, 23, 76],
    [6, 12, 18, 24, 72],
    [10, 16, 22, 28, 85],
    [11, 17, 23, 29, 81],
    [12, 18, 24, 30, 77],
    [13, 19, 25, 31, 73],
    [17, 23, 29, 35, 86],
    [18, 24, 30, 36, 82],
    [19, 25, 31, 37, 78],
    [20, 26, 32, 38, 74],
    [24, 30, 36, 42, 87],
    [25, 31, 37, 43, 83],
    [26, 32, 38, 44, 79],
    [27, 33, 39, 45, 75],
  ];

  let won = null;
  for (const combination of winningCombinations) {
    const [a, b, c, d, e] = combination;
    if (
      fields[a] &&
      fields[a] == fields[b] &&
      fields[b] == fields[c] &&
      fields[c] == fields[d]
    ) {
      won = fields[a];
      document.getElementById("win-line-" + e).classList.remove("d-none");
    }
  }
  if (!!won) {
    console.log("Gewonnen", won);
    finishGame = true;
    setTimeout(function () {
      document.getElementById("GameOver").classList.remove("d-none");
    }, 1500);
  }
}

function NewGame() {
  window.location.reload();
}

function printfootballclub() {
    // Array of football clubs
let clubs = [
  { name: "Aston Villa", wins: 20, draws: 5, losses: 3 },
  { name: "Chelsea", wins: 21, draws: 6, losses: 1 },
  { name: "Machester United", wins: 22, draws: 4, losses: 2 },
  { name: "Manchester City", wins: 19, draws: 7, losses: 2 },
  { name: "Arsenal", wins: 15, draws: 8, losses: 5 }
];

let topClub = "";
let highestPoints = 0;

for (let i = 0; i < clubs.length; i++) {
  let club = clubs[i];

  let points = (club.wins * 3) + (club.draws * 1);

  console.log(club.name + ": " + points + " points");

  if (points > highestPoints) {
    highestPoints = points;
    topClub = club.name;
  }
}

console.log("Top Club:", topClub);
}
printfootballclub();
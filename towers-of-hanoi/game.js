const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[1, 2, 3], [], []];
  }

  promptMove(callback) {
    this.towers.forEach((el) => console.log(el));

    reader.question("select 'from' pile, then 'to' pile: ", function (string) {
      let [startTowerIdx, endTowerIdx] = string.split(",");
      callback(startTowerIdx, endTowerIdx);
    });

  }


}


let game = new Game();
game.promptMove((x, y) => console.log(x, y));

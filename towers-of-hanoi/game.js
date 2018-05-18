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
      let u = this.isValidMove(startTowerIdx, endTowerIdx);
      console.log(u);
      callback(startTowerIdx, endTowerIdx);
    }.bind(this));
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.towers[startTowerIdx].length === 0) {
      return false;
    } else if (this.towers[endTowerIdx].length === 0) {
      return true;
    } else if (this.towers[startTowerIdx][0] < this.towers[endTowerIdx][0]) {
      return true;
    } else {
      return false;
    }
  }


}


let game = new Game();
game.promptMove((x, y) => console.log(x, y));

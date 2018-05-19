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
      this.move(startTowerIdx, endTowerIdx);
      this.print();
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

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let disc = this.towers[startTowerIdx].shift();
      this.towers[endTowerIdx].unshift(disc);
      return true;
    } else {
      return false;
    }
  }

  print() {
    this.towers.forEach((el) => console.log(JSON.stringify(el)));
  }

  isWon() {
    if (this.towers[1] === [1, 2, 3] || this.towers[2] === [1, 2, 3]) {
      return true;
    } else {
      return false;
    }
  }
}


let game = new Game();
// game.promptMove((x, y) => console.log(x, y));
game.towers = [[], [1, 2, 3], []];
console.log(game.towers);
console.log(game.isWon());

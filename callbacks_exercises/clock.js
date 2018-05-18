class Clock {
  constructor() {
    let currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    if (this.seconds === 59) {
      this.seconds = 0;
      this.tickMinute();
    } else {
      this.seconds++;
    }

    this.printTime();
  }

  tickMinute() {
    if (this.minutes === 59) {
      this.minutes = 0;
      this.tickHour();
    } else {
      this.minutes++;
    }
  }

  tickHour() {
    if (this.hours === 23) {
      this.hours = 0;
    } else {
      this.hours++;
    }
  }
}

const clock = new Clock();

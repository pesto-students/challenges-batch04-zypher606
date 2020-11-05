class Cycled {
  constructor(list) {
    this.list = list;
    this.currentIndex = 0;
  }

  current() {
    return this.list[this.currentIndex];
  }

  next() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.list.length) this.currentIndex = 0;

    return this.list[this.currentIndex];
  }

  previous() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) this.currentIndex = this.list.length - 1;

    return this.list[this.currentIndex];
  }

  step(value) {
    // 8 => 2 => 10 [0,1,2]  // 3 4
    this.currentIndex += value;
    if (this.currentIndex >= this.list.length) {
      this.currentIndex %= this.list.length;
    } else if (this.currentIndex < 0) {
      // eslint-disable-next-line max-len
      this.currentIndex = (this.list.length) - ((Math.abs(this.currentIndex) - 1) % this.list.length) - 1;
    }

    return this.list[this.currentIndex];
  }

  set index(value) {
    this.currentIndex = value;

    if (this.currentIndex >= this.list.length) {
      this.currentIndex %= this.list.length;
    } else if (this.currentIndex < 0) {
      // eslint-disable-next-line max-len
      this.currentIndex = (this.list.length) - ((Math.abs(this.currentIndex) - 1) % this.list.length) - 1;
    }
  }

  get index() {
    return this.currentIndex;
  }

  reversed() {
    const current = this;
    current.list = current.list.slice().reverse();

    return {
      next: () => ({ value: current.current() }),
    };
  }

  indexOf(value) {
    return this.list.indexOf(value);
  }

//   [Symbol.iterator]() {
//     const obj = this;
//     return {
//       next: () => ({ value: obj.next() }),
//     };
//   }
}

export { Cycled };

// const fixture = [1, 2, 3];

// const c = new Cycled(fixture);
// console.log(c[Symbol.iterator]().next());

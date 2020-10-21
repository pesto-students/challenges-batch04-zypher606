function sumFibs(num) {
  let fibSeq = [1, 1];

  for (let i = 2; i < num && fibSeq[i - 1] + fibSeq[i - 2] < num; i += 1) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
  }

  fibSeq = fibSeq.filter(item => item % 2 !== 0);
  return fibSeq.reduce((a, b) => a + b);
}

const cache = {};

function cacheFunction() {
  return (n) => {
    if (cache[n] != null) return cache[n];

    // if (n === true) return cache[0];

    cache[n] = sumFibs(n);
    return cache[n];
  };
}

export { sumFibs, cacheFunction };

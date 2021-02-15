// Using set timeout
function debounceWithInterval(fn, timeInMs) {
  let interval;
  return (...args) => {
    clearInterval(interval);
    interval = setInterval(() => {
      fn(...args);
    }, timeInMs);
  };
}

function debounceWithTimeout(fn, timeInMs) {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    //   fn.apply(this, args);  // Explicit binding is not required!!!
    }, timeInMs);
  };
}

export { debounceWithInterval, debounceWithTimeout };

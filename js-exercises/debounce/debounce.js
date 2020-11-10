function debounce(fn, timeInMs) {
  let timeout;

  return (...args) => {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, timeInMs);
  };
}

export { debounce };

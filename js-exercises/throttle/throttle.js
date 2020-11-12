function throttle(fn, timeInMs) {
  let timeout;
  let canRun = true;

  return (...args) => {
    if (canRun === false) return;

    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      canRun = true;
    }, timeInMs);

    fn.apply(context, args);
    canRun = false;
  };
}

export { throttle };

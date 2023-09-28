const memoize = (cb: Function) => {
  const cache: Array<number> = []

  return (values: number) => {
    let result: number;

      if (cache[values]) {
        result = cache[values];
      } else { 
        result = cb(values);
        cache[values] = result;
      }
      return result;
  }
}

module.exports = { memoize }
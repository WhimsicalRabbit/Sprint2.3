const square = (n: number) => {
    let result: number = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1
        }
    }
    return result;
}

const memoizeFn = (cb: Function) => {
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

const memoizedSquare = memoizeFn(square)

function show() {
    console.time()
    console.log(memoizedSquare(9500))
    console.timeEnd()
}

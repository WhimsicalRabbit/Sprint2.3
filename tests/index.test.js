const { memoize } = require("../dist/index")

let func = jest.fn( (n) => {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1
        }
    }
    return result;
})

const memoizedFunc = memoize(func)

describe("Tests for the memoize function", () => {
    it("It should be called twice when sending two different values", () => {
    
        memoizedFunc(9000)
        memoizedFunc(900)
    
        expect(func).toBeCalledTimes(2);
    })
    
    it("It should be called only once when sending the same value twice", () => {
        
        memoizedFunc(5000)
        memoizedFunc(5000)
    
        expect(func).toBeCalledTimes(3);
        //The previous two calls are still take in count
    })
})




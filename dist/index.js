"use strict";
const memoize = (cb) => {
    const cache = [];
    return (values) => {
        let result;
        if (cache[values]) {
            result = cache[values];
        }
        else {
            result = cb(values);
            cache[values] = result;
        }
        return result;
    };
};
module.exports = { memoize };

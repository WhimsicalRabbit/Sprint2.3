var square = function (n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            result += 1;
        }
    }
    return result;
};
var memoizeFn = function (cb) {
    var cache = [];
    return function (values) {
        var result;
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
var memoizedSquare = memoizeFn(square);
function show() {
    console.time();
    console.log(memoizedSquare(9500));
    console.timeEnd();
}

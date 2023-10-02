"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline");
var fs = require("fs");
var rl = readline.createInterface(process.stdin, process.stdout);
var square = function (n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            result += 1;
        }
    }
    return result;
};
var memoize = function (cb) {
    var cache = [];
    try {
        cache = Object.values(JSON.parse(fs.readFileSync("./cache.json").toString()));
    }
    catch (err) {
        // Si no existe el array, lo crearé más abajo
    }
    return function (values) {
        var result;
        if (cache[values]) {
            result = cache[values];
        }
        else {
            result = cb(values);
            cache[values] = result;
            var cacheJSON = JSON.stringify(cache);
            fs.writeFile('./cache.json', cacheJSON, function (err) {
                if (err)
                    throw err;
            });
        }
        return result;
    };
};
var memoizedFunc = memoize(square);
function loop() {
    rl.question("Write a number or write 'exit' to stop \n", function (userInput) {
        if (userInput.trim() == "exit") {
            try {
                if (fs.existsSync('./cache.json')) {
                    fs.unlink('./cache.json', function (err) {
                        if (err)
                            throw err;
                    });
                }
            }
            catch (err) {
            }
            return rl.close();
        }
        else {
            var num = Number(userInput);
            console.log(memoizedFunc(num));
            loop();
        }
    });
}
loop();

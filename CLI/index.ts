import * as readline from 'node:readline';
import * as fs from 'fs';
const rl = readline.createInterface(process.stdin, process.stdout)

const square = (n: number) => {
    let result: number = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1
        }
    }
    return result;
}

const memoize = (cb: Function) => {
    let cache: Array<number> = []

    try {
        cache = Object.values(JSON.parse(fs.readFileSync("./cache.json").toString()));
    }
    catch (err) {
        // Si no existe el array, lo crearé más abajo
    }
  
    return (values: number) => {
      let result: number;
  
        if (cache[values]) {
          result = cache[values];
        } else { 
          result = cb(values);
          cache[values] = result;
          let cacheJSON: string = JSON.stringify(cache);
        fs.writeFile('./cache.json', cacheJSON, (err) => {
            if (err)
                throw err;
        });
        }
        return result;
    }
}

const memoizedFunc = memoize(square)

function loop() {
    rl.question("Write a number or write 'exit' to stop \n", (userInput: string) => {
        if (userInput.trim() == "exit") {
            try{
                if (fs.existsSync('./cache.json')) {
                    fs.unlink('./cache.json', (err) => {
                        if (err)
                            throw err;
                    });
                  }
            }catch(err){

            }
            return rl.close()
        } else {
            let num: number = Number(userInput); 
            
            console.log(memoizedFunc(num));

            loop()
        }
    })
}

loop()
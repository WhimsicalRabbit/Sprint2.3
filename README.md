# Level 1

The memoize function it's a function that can store the past results of a function so it can sent them instantly when detecting that your pasing the same parameters, this is helpful when a function is made to make a demanding process so it can automatically send it instead of processing the same result over and over. This level of the spring is pure logic so it only be tested the memoize function and it's "cache" utility. The square() function calculates the square of a number in a very inefficient way so it takes time when sending a big number. There are two tests, one that calls the function twice with different parameters, receiving two calls from square(), and another doing the same but with the same parameters so it's only called once because square() is never called the second time, the memoize function simply returns the cached result immediately.

# Level 2

This level can be found in the CLI folder. When calling "node index.js" it will ask you to write a number and it will call the square() function the first time, creating a .JSON file to store that result, the next time that you send the same number the result will be instantly send back instead of processing it again, you can write "exit" instead of a number to leave, when doing so, if there is an .JSON file as cache created it will be deleted.

# Level 3

This level can be found in the front-end folder. When executing the .html file it will ask you to open the console, when doing so you can press the button that will call the square() function again to calculate the square of a big number, making use of "console.time()" and "console.timeEnd()" you can see how much time it takes the first time, then, when pressing it again it should be an immediate return.

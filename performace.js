const {​​performance}​​ = require('perf_hooks');

const start = performance.now();

for(let i = 0; i <= 10000; i++) {​​

    console.log(i)

}​​

const end = performance.now();

console.log(`${​​end - start}​​ms`);
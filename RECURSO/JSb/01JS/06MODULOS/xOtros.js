const readline = require('readline');
 
const rl = readline.createInterface(
        process.stdin, process.stdout);
 
rl.setPrompt(`Escriba su edad? `);
rl.prompt();
rl.on('line', (age) => {
    console.log(`Su edad es: ${age}`);
    rl.close();
});

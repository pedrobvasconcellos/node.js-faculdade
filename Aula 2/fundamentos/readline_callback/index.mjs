import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Qual é a sua linguagem de programação favorita?", (Linguagem) => {
    console.log(`A linguagem preferida é ${Linguagem}`);
    rl.close();
});
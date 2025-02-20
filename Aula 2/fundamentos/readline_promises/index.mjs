import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface(input, output);
const linguagem = await rl.question("Qual a sua Linguagem de programação preferida?");
console.log(`A linguagem preferida é ${linguagem}`);
rl.close();
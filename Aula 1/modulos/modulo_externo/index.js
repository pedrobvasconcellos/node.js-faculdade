//minimist é um módulo que permite pegar 
//argumentos passados na linha de comando
//npm install minimist
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
console.log(args);
console.log(args['nome']);
console.log(args['idade']);
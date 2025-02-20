import inquirer from "inquirer";
inquirer.prompt([
    {
    name: "P1",
    message:'Digite a nota da P1',
    validate: (input) => isNaN(input)?'Por favor digite um número válido':true,
    },
    {
    name: "P2",
    message:'Digite a nota da P2',
    validate: (input) => isNaN(input)?'Por favor digite um número válido':true
    }
])
.then((answer) => {
    console.log(answer);
    console.log(`A nota da P1 é ${answer.P1}`);
    console.log(`A nota da P2 é ${answer.P2}`);
    const media = (parseFloat(answer.P1) + parseFloat(answer.P2))/2;
    console.log(`A média é ${media}`);
    if(media>=6){
        console.log('Aprovado');
    }
    else{
        console.log('Reprovado');
    }
}) 
.catch((err)=>{
    console.error(err);
})
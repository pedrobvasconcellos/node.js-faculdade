import {readFile} from "fs/promises";
async function lerArquivo()
{
    try
    {
        const data = await readFile("arquivo.txt", "utf-8");
        console.log(data);
    }
    catch(erro)
    {
        console.error(error)
    }
}
lerArquivo();
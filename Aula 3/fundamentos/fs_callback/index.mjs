import fs from "fs";
function lerArquivo()
{
    fs.readFile("arquivo.txt", "utf-8", (err, data) => {     
    
        if(err)
        {
            console.error(err);
            return;
        }
        console.log(data);
    });
}
lerArquivo();
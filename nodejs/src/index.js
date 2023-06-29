// console.log(chalk.blue("Hello world!")); // o resultado fica azul
import chalk from "chalk"; // antigamente era assim : const chalk = require("chalk");
import fs from "fs";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s$.?#].[^\s\)]*)\)/gm;
  // /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm - feito na aula
  const capturas = [...texto.matchAll(regex)];
  // utilizado spread operator para expandir o conteúdo do array ou string
  const resultados = capturas.map((captura) => ({
    [captura[1]]: [captura[2]],
  }));
  return resultados.length !== 0 ? resultados : "Não há links no arquivo.";
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretório."));
}

// REFATORANDO CÓDIGO UTILIZANDO ASYNC - AWAIT
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    // pega o retorno, resolve, e pega o resultado e joga na variável texto.
    // console.log(texto); // sem async/await -> Promise { <pending> }
    // console.log(texto); // com async/await -> retorna o texto completo
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

export default pegaArquivo; // usa no arquivo cli.js

// Chamando a função para testar o que aparece no terminal
// pegaArquivo("./arquivos/");
// pegaArquivo("./arquivos/texto.md");

// // REFATORANDO CÓDIGO UTILIZANDO PROMISSES, THEN
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro);
// }

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(chalk.red(erro.code, "Não há arquivo no diretório."));
//     }
//     console.log(chalk.green(texto));
//   });
// }

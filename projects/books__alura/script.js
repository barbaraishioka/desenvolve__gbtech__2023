// async é usado para declarar funções assíncronas
// await é usada dentro de funções assíncronas para pausar a execução da função até que uma promessa seja resolvida.
// Uma promessa é um objeto que representa o resultado pendente de uma operação assíncrona.
// O await aguarda a conclusão da promessa e retorna o resultado final.
async function buscaEndereco(cep) {
  const mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    // tentar executar o código
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPConvertida = await consultaCEP.json();

    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente!");
    }

    const cidade = document.getElementById("cidade");
    const logradouro = document.getElementById("endereco");
    const bairro = document.getElementById("bairro");
    const estado = document.getElementById("estado");

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    bairro.value = consultaCEPConvertida.bairro;

    // console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    // se não (se try der errado), pegue o erro e mostre na tela
    // console.log(erro);
  }
}

const cep = document.getElementById("cep");
// focusout quando tira o foco, clica fora do elemento
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// DESCONSIDERAR ABAIXO, SOMENTE PARA ESTUDO

// // Faça a requisição com o fetch() e então utilize a resposta para fazer algo dentro do then()
// const consultaCEP = fetch(`https://viacep.com.br/ws/01001000/json/`).then(
//   (response) =>
//     response
//       .json() // converte o response em json
//       .then((data) => {
//         // mostra o resultado
//         if (data.erro) {
//           // Se não obtiver o resultado e der erro
//           throw Error("Esse CEP não existe!"); // Mensagem customizada para o erro
//         } else {
//           console.log(r); // Se não houver erro, mostre o resultado
//         }
//       })
//       // Pega o erro e envia para o console.log
//       .catch((erro) => console.log(erro))
//       // Independente da resposta, executa o finally
//       .finally((mensagem) => console.log("Processamento concluído!")),
// );
// // console.log(consultaCEP); // retorna uma Promise

// Caso faça várias requisições ao mesmo tempo

// let ceps = ["01001000", "01001001"];
// let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));

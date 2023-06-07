movePersonagem("100", "Esquerda", function () {
  movePersonagem("800", "Direita", function () {
    movePersonagem("200", "Esquerda", function () {
      movePersonagem("10", "Direita", function () {
        movePersonagem("60", "Esquerda", function () {});
      });
    });
  });
});

// No atual formato, código cria o inferno das funções auxiliares(callback hell) ou pirâmide da ruina(pyramid of doom), que acaba dificultando não só o entendimento do código, mas também sua manutenção caso a personagem precise fazer novas movimentações no cenário. Qual solução abaixo entregaria o mesmo resultado, mas resolvendo esses dois problemas citados utilizando promise?

movePersonagem("100", "Esquerda")
  .then(() => movePersonagem("800", "Direita"))
  .then(() => movePersonagem("200", "Esquerda"))
  .then(() => movePersonagem("10", "Direita"))
  .then(() => movePersonagem("60", "Esquerda"));

// Esse cenário onde fazemos várias requisições que dependem uma da outra é bem comum, e nesse cenário podemos fazer uso do método .all da Promise. Passando cada uma das funções dentro de um array como argumento daPromise.all, conseguimos executar todas as funções em ordem sem precisar encadear vários.then()`

Promise.all([
  movePersonagem("100", "Esquerda"),
  movePersonagem("800", "Direita"),
  movePersonagem("200", "Esquerda"),
  movePersonagem("10", "Esquerda"),
  movePersonagem("60", "Esquerda"),
])
  .then((results) => {
    // Lógica para lidar com os resultados das promessas resolvidas
    console.log(results);
  })
  .catch((error) => {
    // Lógica para lidar com erros nas promessas
    console.error(error);
  });

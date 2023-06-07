import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
<td class="td" data-td>${nome}</td>
<td>${email}</td>
<td>
  <ul class="tabela__botoes-controle">
    <li>
      <a
        href="../telas/edita_cliente.html?id=${id}"
        class="botao-simples botao-simples--editar"
        >Editar</a
      >
    </li>
    <li>
      <button class="botao-simples botao-simples--excluir" type="button">
        Excluir
      </button>
    </li>
  </ul>
</td>
`;

  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id; // inserido um data atribute data-id na tag tr
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

tabela.addEventListener("click", async (evento) => {
  let botaoDeletar =
    evento.target.className === "botao-simples botao-simples--excluir";
  if (botaoDeletar) {
    try {
      const linhaCliente = evento.target.closest("[data-id]");
      // closest procura o elemento com o data atribute data-id mais próximo
      let id = linhaCliente.dataset.id;
      await clienteService.removeCliente(id);
      linhaCliente.remove();
    } catch (erro) {
      window.location.href = "../telas/erro.html";
    }
  }
});

const render = async () => {
  try {
    const listaClientes = await clienteService.listaClientes();
    listaClientes.forEach((elemento) => {
      tabela.appendChild(
        // adiciona o criaNovaLinha como filho da tabela
        criaNovaLinha(elemento.nome, elemento.email, elemento.id),
      );
    });
  } catch (erro) {
    window.location.href = "../telas/erro.html";
  }
};

render();

// // _______________________________________________________ //
// // _______________________________________________________ //

// // USANDO XMLHttpRequest e Promise

// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/profile");
//     http.onload = () => {
//       if (http.status >= 400) {
//         reject(JSON.parse(http.response));
//       } else {
//         resolve(JSON.parse(http.response));
//       }
//     };
//     http.send();
//   });
//   return promise;
// };

// listaClientes().then((data) => {
//   data.forEach((elemento) => {
//     tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
//   });
// });

// // _______________________________________________________ //
// // _______________________________________________________ //

// // USANDO XMLHttpRequest

// const http = new XMLHttpRequest();
// http.open("GET", "http://localhost:3000/profile");
// http.onload = () => {
//   const data = JSON.parse(http.response);
//   data.forEach((elemento) => {
//     tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
//   });
//
//   // SEQUENCIAS DE OPERAÇÕES ASSINCRONAS, ONDE VAI MOSTRANDO OS DADOS UM APÓS O OUTRO
//   // PORÉM NÃO É RECOMENDADO MONTAR ASSIM POIS VIRA UM CALLBACK HELL
//
//   const http2 = new XMLHttpRequest();
//   http2.open("GET", "http://localhost:3000/profile/semanaPassada");
//   http.onload = () => {
//     const data = JSON.parse(http2.response);
//     data.forEach((elemento) => {
//       tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
//     });

//     const http3 = new XMLHttpRequest();
//     http3.open("GET", "http://localhost:3000/profile/semanaRetrasada");
//     http3.onload = () => {
//       const data = JSON.parse(http3.response);
//       data.forEach((elemento) => {
//         tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
//       });
//     };
//     http3.send();
//   };
//   http2.send();
// };
// http.send();

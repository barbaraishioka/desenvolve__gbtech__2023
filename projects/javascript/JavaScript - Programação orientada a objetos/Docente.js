import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso ${curso}.`;
  }
}

const novoDocente = new Docente("Mariana", "m@m.com", "2021-01-01");

console.log(novoDocente);
// Docente {
//   nome: 'Mariana',
//   email: 'm@m.com',
//   nascimento: '2021-01-01',
//   role: 'docente',
//   ativo: true
// }
console.log(novoDocente.exibirInfos());
// Mariana, m@m.com
console.log(novoDocente.aprovaEstudante("Juliana", "JS"));
// Estudante Juliana aprovado no curso JS.

import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2021-01-01");

// console.log(novoAdmin.criarCurso("JS", 20));
//Curso de JS criado com 20 vagas

// console.log(novoAdmin);
// Admin {
//   nome: 'Rodrigo',
//   email: 'r@r.com',
//   nascimento: '2021-01-01',
//   role: 'admin',
//   ativo: true
// }

// console.log(novoAdmin.exibirInfos());
// Rodrigo, r@r.com

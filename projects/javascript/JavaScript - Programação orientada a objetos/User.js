export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// const novoUser = new User("Juliana", "j@j.com", "2021-01-01");

// console.log(novoUser);
// // User {
// //   nome: 'Juliana',
// //   email: 'j@j.com',
// //   nascimento: '2021-01-01',
// //   role: 'estudante',
// //   ativo: true
// // }

// console.log(novoUser.exibirInfos());
// // Juliana, j@j.com

// console.log(User.prototype.isPrototypeOf(novoUser)); // true
// // Ou seja, por baixo da classe user, temos uma propriedade prototype, que além de tudo foi passada pela cadeia de protótipo, para dentro de novoUser, mesmo usando a sintaxe de classe, e mesmo criando, instanciando através do construtor, através de uma nova classe.

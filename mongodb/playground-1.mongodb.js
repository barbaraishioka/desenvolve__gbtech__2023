const database = "db";
const collection = "alunos";
use(database); // selecionar banco de dados
db.createCollection(collection); // criar coleção

// inserir
db.alunos.insert({
  nome: "Felipe",
  data_nascimento: new Date(1994, 2, 26),
});

db.alunos.insert({
  nome: "Felipe",
  data_nascimento: new Date(1994, 2, 26),
  curso: {
    nome: "Sistemas de informação",
  },
  notas: [10.0, 9.0, 4.5],
  habilidades: [
    {
      nome: "inglês",
      nível: "avançado",
    },
    {
      nome: "taekwondo",
      nível: "básico",
    },
  ],
});

// buscar - aparece todos que foram adicionados na coleção
db.alunos.find();

// remove um item da coleção utilizando o id
db.alunos.remove({
  _id: ObjectId("6490e8691e594d8c7abe924f"),
});

db.alunos.find();

db.alunos.insert({
  nome: "Julio",
  data_nascimento: new Date(1972, 8, 30),
  curso: {
    nome: "Medicina",
  },
  habilidades: [
    {
      nome: "inglês",
      nível: "avançado",
    },
  ],
});

db.alunos.insert({
  nome: "Alberto",
  data_nascimento: new Date(1972, 9, 30),
  curso: {
    nome: "Engenharia Química",
  },
  habilidades: [
    {
      nome: "inglês",
      nível: "intermediário",
    },
  ],
});

db.alunos.find();

db.alunos.insert({
  nome: "Daniela",
  data_nascimento: new Date(1995, 9, 30),
  curso: {
    nome: "Moda",
  },
  vacinas: ["antitetanica"],
  habilidades: [
    {
      nome: "alemão",
      nível: "básico",
    },
  ],
});

db.alunos.find();

// pretty() é para ficar mais bonito o resultado
db.alunos.find().pretty();

// busca por itens com nome Felipe
db.alunos.find({
  nome: "Felipe",
});

db.alunos.insert({
  nome: "Felipe",
  curso: {
    nome: "Matemática",
  },
});

db.alunos.find({
  nome: "Felipe",
});

db.alunos.remove({
  _id: ObjectId("6490f4ab848b71a7493e0611"),
});

// busca pelo nome da habilidade, no caso inglês
db.alunos.find({
  "habilidades.nome": "inglês",
});

// busca pelo Felipe que tem a habilidade inglês
db.alunos.find({
  nome: "Felipe",
  "habilidades.nome": "inglês",
});

db.alunos.find({
  "curso.nome": "Sistemas de informação",
});

db.alunos.find({
  "curso.nome": "Engenharia Química",
});

// faz uma busca porém só trás a segunda opção porque o segundo sobrepõe ao primeiro
db.alunos.find({
  "curso.nome": "Sistemas de informação",
  "curso.nome": "Engenharia Química",
});

// buscar por dois itens da mesma chave, deve utilizar o $or:[{item}{item}]
// $or - qualquer uma das opções é verdadeira
db.alunos.find({
  $or: [
    { "curso.nome": "Sistemas de informação" },
    { "curso.nome": "Engenharia Química" },
  ],
});

// busca a Daniela que faz um dos dois cursos
db.alunos.find({
  $or: [
    { "curso.nome": "Sistemas de informação" },
    { "curso.nome": "Engenharia Química" },
  ],
  nome: "Daniela",
});

// busca a Daniela que faz um dos três cursos
db.alunos.find({
  $or: [
    { "curso.nome": "Sistemas de informação" },
    { "curso.nome": "Engenharia Química" },
    { "curso.nome": "Moda" },
  ],
  nome: "Daniela",
});

// busca por vários nomes de cursos ao mesmo tempo de forma mais fácil.
// {$in: [item, item]}
db.alunos.find({
  "curso.nome": { $in: ["Sistemas de informação", "Engenharia Química"] },
});

db.alunos.insert({
  nome: "Fernando",
  data_nascimento: new Date(1994, 3, 26),
  notas: [10, 4.5, 7],
  curso: {
    nome: "Sistema de Informação",
  },
});

db.alunos.find({
  "curso.nome": "Sistema de Informação",
});

db.alunos.update(
  // update por padrão atualiza somente o primeiro que encontra
  { "curso.nome": "Sistema de Informação" },
  {
    $set: {
      "curso.nome": "Sistemas de Informação",
    },
    // necessário setar o que quer mudar, se não, tudo é substituído.
  },
);

db.alunos.find();

db.alunos.update(
  { "curso.nome": "Sistemas de INFO" },
  {
    $set: {
      "curso.nome": "Sistemas de Informação",
    },
  },
  {
    multi: true, // atualiza o valor de todos os cursos com o nome errado de uma vez
  },
);

db.alunos.find({ _id: ObjectId("6490e97b1f10cd968ad28a70") });

db.alunos.update(
  { _id: ObjectId("6490e97b1f10cd968ad28a70") },
  {
    $push: { notas: 8.5 }, // adiciona um valor dentro do array de notas
  },
);

db.alunos.find({ _id: ObjectId("6490e97b1f10cd968ad28a70") });

db.alunos.update(
  { _id: ObjectId("6490e97b1f10cd968ad28a70") },
  {
    // push + each adiciona mais de um valor dentro do array de notas.
    $push: { notas: { $each: [8.5, 3] } },
  },
);

db.alunos.find({ _id: ObjectId("6490e97b1f10cd968ad28a70") });

db.alunos.find({
  notas: 8.5,
});

db.alunos.find({
  notas: { $gt: 5 }, // procura todos alunos que tem nota maior que 5 e exibe todo seu conteúdo
});

db.alunos.insert({
  nome: "André",
  data_nascimento: new Date(1991, 1, 25),
  curso: {
    nome: "Matemática",
  },
  notas: [7, 5, 9, 4.5],
});

db.alunos.insert({
  nome: "Lúcia",
  data_nascimento: new Date(1984, 7, 17),
  curso: {
    nome: "Matemática",
  },
  notas: [8, 9.5, 10],
});

db.alunos.find();

db.alunos.find({
  notas: { $gt: 5 },
});

// procura um aluno que tem nota maior que 5 (pega somente o primeiro que encontra) e exibe todo seu conteúdo
db.alunos.findOne({
  notas: { $gt: 5 },
});

// ordena os nomes em ordem crescente (alfabética)
db.alunos.find().sort({ nome: 1 });

// ordena os nomes em ordem decrescente
db.alunos.find().sort({ nome: -1 });

// ordena os nomes em ordem crescente e mostra até 3 alunos
db.alunos.find().sort({ nome: 1 }).limit(3);

// procura os alunos que tem nota menor que 5 e exibe seus conteúdos
db.alunos.find({ notas: { $lt: 5 } });

db.alunos.update(
  { _id: ObjectId("6490e97b1f10cd968ad28a70") },
  {
    $set: {
      localizacao: {
        endereco: "Rua Vergueiro, 3185",
        cidade: "São Paulo",
        coordinates: [-23.588213, -46.632356], // adiciona coordenadas geográficas
        // https://www.latlong.net/ -> site onde transforma endereço em coordenadas
        type: "Point",
        // para buscar uma localização é obrigatório utilizar o coordinates: [-00000, -00000] e type: "Point"
      },
    },
  },
);

db.alunos.find({ _id: ObjectId("6490e97b1f10cd968ad28a70") });

db.alunos.find();

// cria um índice de busca
db.alunos.createIndex({
  localizacao: "2dsphere",
});

// realiza a busca dos alunos mais próximos da coordenada
db.alunos.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-23.5640265, -46.6527128] },
      distanceField: "distancia.calculada",
      spherical: true,
    },
  },
]);

// realiza a mesma busca, mas limita o resultado para apenas os 3 mais próximos
db.alunos.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-23.5640265, -46.6527128] },
      distanceField: "distancia.calculada",
      spherical: true,
    },
  },
  {
    $limit: 3,
  },
]);

// realiza a mesma busca, limita a quantidade de resultados e ignora o primeiro resultado
// no caso abaixo, ignora o primeiro resultado, mostra o segundo e terceiro
db.alunos.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-23.5640265, -46.6527128] },
      distanceField: "distancia.calculada",
      spherical: true,
    },
  },
  {
    $limit: 3,
  },
  {
    $skip: 1, // pula o primeiro resultado
  },
]);

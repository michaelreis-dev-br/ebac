class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, sexo, disciplina) {
    super(nome, idade, sexo);
    this.disciplina = disciplina;
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, sexo, curso) {
    super(nome, idade, sexo);
    this.curso = curso;
  }
}

class Disciplina {
  constructor(nome) {
    this.nome = nome;
  }
}

const professor = new Professor("Carlos Silva", 40, "Masculino", "Matemática");
const aluno = new Aluno("Ana Oliveira", 22, "Feminino", "Engenharia");
const disciplina = new Disciplina("Matemática");

console.log(professor);
console.log(aluno);
console.log(disciplina);

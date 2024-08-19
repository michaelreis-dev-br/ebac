class Aluno {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
}

class Boletim extends Aluno {
  constructor(nome, idade, sexo, nota) {
    super(nome, idade, sexo);
    this.nota = nota;
  }

  passouDeAno() {
    return this.nota >= 6;
  }
}

const alunos = [
  new Boletim("João", 16, "M", 7),
  new Boletim("Maria", 17, "F", 5),
  new Boletim("Pedro", 15, "M", 8),
  new Boletim("Ana", 16, "F", 6),
];

const alunosQuePassaram = alunos.filter((aluno) => aluno.passouDeAno());

console.log(alunosQuePassaram);
